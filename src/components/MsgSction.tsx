import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiCopy } from "react-icons/fi";
import Answer from "./Answer";
import Question from "./Question";

interface MsgSectionProps {
  msg: string;
  reponse: string;
}

const MsgSction = ({ msg, reponse }: MsgSectionProps) => {
  return (
    <div className="col-12 d-flex flex-column gap-1" style={{ maxWidth: "600px" }}>
      <div className="msg d-flex flex-column rounded-2 gap-2 p-2">
        <Question text={msg} />
        <Answer text={reponse} />
      </div>
      <div className="d-flex justify-content-end pe-2">
        <div className="d-flex justify-content-between" style={{ width: "100px" }}>
          <button type="button" className="btn-msg-action">
            <AiOutlineLike />
          </button>
          <button type="button" className="btn-msg-action">
            <AiOutlineDislike />
          </button>
          <button type="button" className="btn-msg-action">
            <FiCopy />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MsgSction;
