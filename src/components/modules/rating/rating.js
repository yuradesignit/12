import React from "react";

import "./rating.css";

const Rating = () => {
  return (
    <div className="rating">
      <svg
        className="rating__icon"
        width="9"
        height="10"
        viewBox="0 0 9 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.50008 0.5L5.89051 3.46258L9 3.93778L6.74996 6.24369L7.2811 9.5L4.50008 7.96267L1.7189 9.5L2.25004 6.24369L0 3.93778L3.10949 3.46258L4.50008 0.5Z"
          fill="#FFAA13"
        />
      </svg>
      <p className="rating__number">5</p>
      <svg
        className="rating__icon"
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 8.5L3.87 7.8913C1.53 5.8913 0 4.54348 0 2.8913C0 1.54348 1.08 0.5 2.475 0.5C3.24 0.5 4.005 0.847826 4.5 1.41304C4.995 0.847826 5.76 0.5 6.525 0.5C7.92 0.5 9 1.54348 9 2.8913C9 4.54348 7.47 5.8913 5.13 7.8913L4.5 8.5Z"
          fill="#FF1313"
        />
      </svg>
      <p className="rating__number">90+</p>
      <svg
        className="rating__icon"
        width="12"
        height="9"
        viewBox="0 0 12 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0.5C3.27273 0.5 0.927273 2.15333 0 4.5C0.927273 6.84667 3.27273 8.5 6 8.5C8.72727 8.5 11.0727 6.84667 12 4.5C11.0727 2.15333 8.72727 0.5 6 0.5ZM6 7.16667C4.47273 7.16667 3.27273 5.99333 3.27273 4.5C3.27273 3.00667 4.47273 1.83333 6 1.83333C7.52727 1.83333 8.72727 3.00667 8.72727 4.5C8.72727 5.99333 7.52727 7.16667 6 7.16667ZM6 2.9C5.07273 2.9 4.36364 3.59333 4.36364 4.5C4.36364 5.40667 5.07273 6.1 6 6.1C6.92727 6.1 7.63636 5.40667 7.63636 4.5C7.63636 3.59333 6.92727 2.9 6 2.9Z"
          fill="#138EFF"
        />
      </svg>
      <p className="rating__number">1K+</p>
    </div>
  );
};

export default Rating;
