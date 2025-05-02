import Header from "./components/Header"
import MsgSction from "./components/MsgSction"
import { CiPaperplane } from "react-icons/ci";
import {motion} from "framer-motion"

import { useRef, useState , useEffect , useTransition} from "react";

import { Overview } from "./components/Overview";
import Assistans from "./assistants/googleai";
import Loader from "./components/Loader/Loader";
import AssistantOpenAI from "./assistants/openai";
//import AssistansOpenAi from "./assistants/openai";

interface typemsg{
  msg:string,
  repense:string
}

function detectAssistant(message: string): "google" | "deepseek" {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes("youtube") || lowerMsg.includes("gmail") || lowerMsg.includes("google")) {
    return "google"; // Pour les services Google ou contenu multimédia
  }

  if (/[{}<>;]/.test(message) || lowerMsg.includes("code") || lowerMsg.includes("program")) {
    return "deepseek"; // Si le message contient du code
  }

  if (/[àâçéèêëîïôûùüÿ]/i.test(message)) {
    return "google"; // Si le message est en français
  }

  return "google"; // Par défaut
}




const App = () => {
  const [existmsg , setExistmsg] = useState<boolean>(false);
  const [msgs, setMsgs] = useState<typemsg[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [loader , setLoader] = useState<boolean>();
  

  
  //use googleAi
  const convchat= new Assistans();
  //const convchat=new AssistantOpenAI();
  

  async function handleclick() {
    const msgcontent = textareaRef.current?.value?.trim();

    if (!msgcontent) return;

   

    // Active la section des messages
    setExistmsg(true);
    setLoader(true);

    try {
      const resultcontent: string = await convchat.sendMessage(msgcontent);
      setMsgs(prev => [...prev, { msg: msgcontent, repense: resultcontent }]);
      if (textareaRef.current) {
        textareaRef.current.value = "";
      }
    } catch (error) {
      console.error("Erreur dans handleclick :", error);
    }finally{
      setLoader(false);
    }
  }

  // async function handleclick() {
  //   const msgcontent = textareaRef.current?.value?.trim();

  //   if (!msgcontent) return;

  //   // Active la section des messages
  //   setExistmsg(true);
  //   setLoader(true);

  //   try {
  //     // Envoi du message à OpenAI via la classe AssistantOpenAI
  //     const resultcontent: string = await convchat.sendMessage(msgcontent);
      
  //     // Mise à jour de l'état avec le message de l'utilisateur et la réponse de GPT
  //     setMsgs(prev => [...prev, { msg: msgcontent, repense: resultcontent }]);
      
  //     // Réinitialisation de la zone de texte
  //     if (textareaRef.current) {
  //       textareaRef.current.value = "";
  //     }
  //   } catch (error) {
  //     console.error("Erreur dans handleclick :", error);
  //   } finally {
  //     setLoader(false);
  //   }
  // }



  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [msgs]); // scrolle à chaque nouveau message


  return (
    <div className="main-container row m-0 overflow-hidden">
      <div className="col-12 m-0 d-flex flex-column" style={{height:"100vh", width:"100vw"}}>
      {
        existmsg ? (
          <>
            <Header />
            {loader && <Loader />}
            <div className="msg-contianer row d-flex flex-column gap-2 has-scrollbar align-items-center text-center" style={{ flexWrap: "nowrap" }}>              
              {
                msgs.map((items , index) => (
                  <MsgSction msg={items.msg}  reponse={items.repense} key={index}  />
                ))
              }
              <div ref={bottomRef} /> {/* <- référence pour scroll automatique */}
            </div>
          </>
        ) : 
        (
          <div className="d-flex align-items-center" style={{height:"90vh"}}>
             <Overview />
          </div>   
        )
      }

        
        <div style={{width:"100vw"}} className="row text-center justify-content-center d-flex align-items-center">
          <div className="inser-container rounded-4 p-2 align-items-center  text-center gap-1 m-2" style={{maxWidth:"700px" }}>
            <textarea id="msg" placeholder="Send a message..." className="msg-input  border-0 rounded-2 p-1 has-scrollbar" style={{height:"90%"}} ref={textareaRef} 
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault(); // Empêche le saut de ligne
                handleclick(); // Envoie le message
              }
            }}>
            </textarea>
            <div className="text-center d-flex align-items-end justify-content-center" style={{height:"100%"}}>
            <motion.button
                  className="border-0 rounded-pill d-flex align-items-center p-2 text-center"
                  style={{ background: "#fbb583", width: "30px" }}
                  initial={{ boxShadow: "none" }}
                  whileTap={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" }}
                  transition={{ ease: "linear" }}
                  onClick={handleclick}
                >
                  <CiPaperplane />
            </motion.button>

            </div>
          
          </div>

        </div>
        
      
      </div>
    </div>
    
  )
}

export default App