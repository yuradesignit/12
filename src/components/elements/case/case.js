import React from "react";

import "./case.css";

const Case = ({ preview, link }) => {
  return (
    <a href={link} className="case">
      <img src={preview} className="case" />
    </a>
  );
};

export default Case;
