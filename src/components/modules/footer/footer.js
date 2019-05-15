import React from "react";

import Item from "..//../elements/item/item";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer__contacts">
          <div className="footer__contact facebook">
            <Item
              text="facebook"
              link="https://www.facebook.com/yuradesignit"
            />
          </div>
          <div className="footer__contact instagram">
            <Item
              text="instagram"
              link="https://www.instagram.com/yuradesignit"
            />
          </div>
          <div className="footer__contact telegram">
            <Item text="telegram" link="https://t.me/yuradesignit" />
          </div>
          <div className="footer__contact vkontakte">
            <Item text="vkontakte" link="https://vk.com/yuradesignit" />
          </div>
        </div>
      </div>
      <div>
        <p className="copyright">© 2019 @yuradesignit</p>
      </div>
    </div>
  );
};

export default Footer;
