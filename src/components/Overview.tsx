import { motion } from 'framer-motion';
import { LuMessageCircle } from "react-icons/lu";
import chat from "../assets/chaticon.png"

export const Overview = () => {
  return (
    <>
    <motion.div
      key="Overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.75 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <img src={chat} width="44" height="44"/>
          <span>+</span>
          <LuMessageCircle size={44}/>
        </p>
        <p>
          Welcome to <strong>chatM</strong><br />
          <strong>How</strong> do I <strong>help you</strong>.
        </p>
      </div>
    </motion.div>
    </>
  );
};
