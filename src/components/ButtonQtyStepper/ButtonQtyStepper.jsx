/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ButtonQtyStepper = () => {
  return (
    <div className="button-qty-stepper">
      <div className="qty-selector">
        <div className="element">0</div>
      </div>
      <div className="frame">
        <div className="icon-minus-wrapper">
          <div className="icon-minus">
            <img
              className="plus"
              alt="Plus"
              src="https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/plus-9.svg"
            />
          </div>
        </div>
        <div className="icon-plus-wrapper">
          <div className="icon-plus">
            <img
              className="img"
              alt="Plus"
              src="https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/plus-8.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
