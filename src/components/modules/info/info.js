import React from "react";

import Header1 from "..//../elements/header1/header1";
import Header2 from "..//../elements/header2/header2";
import Paragraph from "..//../elements/paragraph/paragraph";
import Button from "..//../modules/button/button";
import Portfolio from "..//../modules/portfolio/portfolio";

import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <div className="info__header1">
        <Header1 text="everyone has to&nbsp;do&nbsp;his job, show me&nbsp;how you work, &amp;&nbsp;i&nbsp;will make your product better for people" />
      </div>
      <div className="info__paragraph">
        <Paragraph text="here are my&nbsp;three best works, they will help you understand whether i&nbsp;fit your project" />
      </div>
      <div>
        <Portfolio />
      </div>
      <div className="info__header2">
        <Header2 text="what projects&nbsp;I work with" />
      </div>
      <div className="info__paragraph">
        <Paragraph text="i&nbsp;do&nbsp;the design of&nbsp;brands &amp;&nbsp;mobile apps. you can start working with me&nbsp;with ideas.&nbsp;i&nbsp;can manage projects &amp; my&nbsp;time" />
      </div>
      <div>
        <Button link="mailto:hireme@yuradesignit.com" />
      </div>
      <div className="info__paragraph">
        <Paragraph text="or&nbsp;write where it&nbsp;will be&nbsp;convenient for you" />
      </div>
    </div>
  );
};

export default Info;
