import React from "react";
import styleWrapper from "./../HOC/stylesWrapper";
const ButtonOne = props => {
  return <button style={props.styles}>I am button one!</button>;
};
export default styleWrapper(ButtonOne);
