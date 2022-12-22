import React from "react";
import {MessageStyle} from "./Messages.styled";


export const Message = (props) => {


  console.log(props.children);

  return (
    <MessageStyle>
      <h1>{props.children}</h1>
    </MessageStyle>
  )
}

/*

return (
  <MessageStyle>
    <p>'lalalala'</p>
  </MessageStyle>
)*/
