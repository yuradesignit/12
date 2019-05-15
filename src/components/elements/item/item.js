import React from "react";

import "./item.css";

const Item = ({ text, link }) => {
  return (
    <a className="item" href={link}>
      {text}
    </a>
  );
};

export default Item;
