import { FC } from "react"
import Markdown from "react-markdown"

interface typ{
  text : string
}
const Answer:FC<typ> = ({text}) => {
  return (
    <div className="answer-contianer rounded-2 p-2 bg-body-tertiary">
      <Markdown>{text}</Markdown>
    </div>
  )
}

export default Answer