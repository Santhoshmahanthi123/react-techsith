import React from "react";
const child = props => {
  return (
    <div onClick={props.doSomething}>
      {props.title}
      <button />
    </div>
  );
};
export default child;
