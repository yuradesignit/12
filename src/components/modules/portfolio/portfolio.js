import React from "react";

import Case from "..//..//elements/case/case";

import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Case
        link="https://dribbble.com/shots/6488920-Sign-Up"
        preview="https://cdn.dribbble.com/users/3452339/screenshots/6488920/001.gif"
      />
      <Case
        link="https://dribbble.com/shots/6384397-Brand-identity-Cappuccino"
        preview="https://cdn.dribbble.com/users/3452339/screenshots/6384397/gallery-cappuccino.gif"
      />
      <Case
        link="https://dribbble.com/shots/6369358-Simple-flowcharts-mobile"
        preview="https://cdn.dribbble.com/users/3452339/screenshots/6369358/simple-flowcharts-mobile.gif"
      />
    </div>
  );
};

export default Portfolio;
