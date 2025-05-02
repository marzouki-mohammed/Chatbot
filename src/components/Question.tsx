import { FC } from "react"
import Markdown from "react-markdown"

interface typ{
  text:string
}
const Question:FC<typ> = ({text}) => {
  return (
    <div className="answer-contianer rounded-2 p-2 text-muted">
            <Markdown>{text}</Markdown>
    </div>
  )
}

export default Question