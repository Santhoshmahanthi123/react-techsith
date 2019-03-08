import React from "react";
import Child from "./child";
const parent = props => {
  return (
    <div>
      <Child {...props} />
    </div>
  );
};
// spread operator passes everything coming from grand father to parent

export default parent;
