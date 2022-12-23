import React from "react";//todo: в окрему папку
import {MessageStyle} from "./Messages.styled";


export const Message = (props) => {

  return (
    <MessageStyle>
      <h1>{props.children}</h1>
    </MessageStyle>
  )
}
