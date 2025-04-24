import { FC } from "react"

interface typ{
  text:string
}
const Question:FC<typ> = ({text}) => {
  return (
    <div className="answer-contianer rounded-2 p-2">
            {text}
    </div>
  )
}

export default Question