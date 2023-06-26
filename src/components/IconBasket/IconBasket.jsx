/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const IconBasket = ({ hasItems, style }) => {
  return (
    <div className="icon-basket" style={style}>
      <img
        className="union"
        alt="Union"
        src={
          hasItems
            ? "https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/union-3.svg"
            : "https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/union-2.svg"
        }
      />
    </div>
  );
};

IconBasket.propTypes = {
  hasItems: PropTypes.bool,
};
