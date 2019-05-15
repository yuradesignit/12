import React from "react";

import Item from "..//../elements/item/item";
import Paragraph from "..//../elements/paragraph/paragraph";

import "./button.css";

const Button = () => {
  return (
    <div className="button">
      <a
        className="link"
        href="mailto:hireme@yuradesignit.com?subject=A%20job%20offer&body=Hello!%0A%0AI%20prepared%20a%20letter%20for%20you%2C%20just%20write%20what%20I%20need%20to%20know%2C%20after%20the%20colon%20and%20send%20it.%20You%20can%20delete%20everything%20and%20write%20it%20in%20your%20own%20way.%0A%0A%0A%0ATell%20me%20about%20your%20project%3A%0A%0AWhat%20is%20the%20problem%20now%3A%0A%0AWhat%20indicators%20do%20you%20want%20to%20improve%3A%0A%0AWhat%20is%20the%20deadline%20for%20your%20project%3A%0A%0AWhat%20budget%20do%20you%20plan%20for%20the%20project%3A%0A%0AWhat%20else%20do%20I%20need%20to%20know%3F%0A%0A%0A%0AThanks%20for%20filling%20out.%20During%20the%20day%20I%20will%20answer%20you.%0A%0AYury."
      >
        <div className="hireme">
          <Item text="hireme@yuradesignit.com" />
        </div>
        <div className="button__paragraph">
          <Paragraph text="i&nbsp;have prepared for you a&nbsp;list of&nbsp;questions: the budget &amp;&nbsp;deadlines of&nbsp;the project, what you want to&nbsp;achieve &amp;&nbsp;how it&nbsp;will be&nbsp;more convenient for you to&nbsp;work" />
        </div>
      </a>
    </div>
  );
};

export default Button;
