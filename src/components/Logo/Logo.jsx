/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Logo = ({
  text = "Label text",
  activeIndicator = true,
  size,
  style,
  sizeSmall = "https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/size-small.svg",
}) => {
  return (
    <img
      className={`logo ${size}`}
      style={style}
      alt="Size large"
      src={
        size === "jumbo"
          ? "https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/size-jumbo.svg"
          : size === "medium"
          ? "https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/size-medium.svg"
          : size === "small"
          ? sizeSmall
          : "https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/size-large.svg"
      }
    />
  );
};

Logo.propTypes = {
  text: PropTypes.string,
  activeIndicator: PropTypes.bool,
  size: PropTypes.oneOf(["large", "jumbo", "medium", "small"]),
  sizeSmall: PropTypes.string,
};
