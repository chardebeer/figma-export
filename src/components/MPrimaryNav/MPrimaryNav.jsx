/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { IconBasket } from "../IconBasket";
import { Logo } from "../Logo";
import "./style.css";

export const MPrimaryNav = ({ style }) => {
  return (
    <div className="m-primary-nav" style={style}>
      <div className="icon-hamburger">
        <img
          className="hamburger"
          alt="Hamburger"
          src="https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/hamburger-1.svg"
        />
      </div>
      <Logo
        size="small"
        sizeSmall="https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/logo-1.svg"
        style={{
          left: "unset",
          minWidth: "120px",
          position: "relative",
          top: "unset",
          width: "unset",
        }}
      />
      <IconBasket
        hasItems
        style={{
          minWidth: "20px",
          width: "unset",
        }}
      />
    </div>
  );
};
