import React from "react";
const child = props => {
  return (
    <div>
      <button onClick={props.doWhatEver}>{props.xyz}</button>
    </div>
  );
};
export default child;
