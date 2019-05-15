import React from "react";
import ReactDOM from "react-dom";

import Main from "./components/blocks/main/main";

import "./styles.css";

function IndexPage() {
  return <Main />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<IndexPage />, rootElement);
