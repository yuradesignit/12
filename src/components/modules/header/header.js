import React from "react";

import Item from "..//../elements/item/item";
import Rating from "..//../modules/rating/rating";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__about">
        <div className="header__name">
          <Item text="@yuradesignit" />
        </div>
        <div className="header__rating">
          <Rating />
        </div>
      </div>
      <div className="header__contacts">
        <div className="header__contact mail">
          <Item text="mail" link="mailto:hireme@yuradesignit.com" />
        </div>
        <div className="header__contact upwork">
          <Item text="upwork" link="https://www.upwork.com/fl/yuradesignit" />
        </div>
        <div className="header__contact dribbble">
          <Item text="dribbble" link="https://dribbble.com/yuradesignit" />
        </div>
        <div className="header__contact behance">
          <Item text="behance" link="https://www.behance.net/yuradesignit" />
        </div>
      </div>
    </div>
  );
};

export default Header;
