/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconCalendar = ({
  style,
  icon = "https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/icon-1.svg",
}) => {
  return (
    <div className="icon-calendar" style={style}>
      <img className="icon" alt="Icon" src={icon} />
    </div>
  );
};

IconCalendar.propTypes = {
  icon: PropTypes.string,
};
