import React from "react";
import Child from "./child";
// sibling communication
const parent = props => {
  return (
    <div>
      <Child doWhatEver={props.changeTheWorldEvent} title={props.title} />
      <Child doWhatEver={props.keepTheWorldSameEvent} title={props.title} />
    </div>
  );
};
// spread operator passes everything coming from grand father to parent

export default parent;
