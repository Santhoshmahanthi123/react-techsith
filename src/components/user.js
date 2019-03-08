import React from "react";
const user = props => {
  return (
    <li>
      <span>
        name : {props.children}, age: {props.age}
      </span>
      <button onClick={props.deleteEvent}>Delete</button>
    </li>
  );
};
export default user;
