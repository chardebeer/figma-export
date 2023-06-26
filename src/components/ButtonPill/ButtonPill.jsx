/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconPlaceholder } from "../IconPlaceholder";
import "./style.css";

export const ButtonPill = ({
  showLabel = true,
  showRightIcon = true,
  showLeftIcon = true,
  showQty = true,
  style,
  styleOverride,
  buttonStyle,
  text = "Button Label",
  override = (
    <IconPlaceholder
      iconStyle={{
        backgroundColor: "#ffffff",
      }}
      style={{
        minWidth: "20px",
        position: "relative",
        width: "unset",
      }}
    />
  ),
}) => {
  return (
    <div className={`button-pill ${style}`} style={styleOverride}>
      {showLeftIcon && (
        <IconPlaceholder
          iconStyle={
            style === "filled"
              ? {
                  backgroundColor: "#ffffff",
                }
              : undefined
          }
          style={{
            minWidth: "20px",
            position: "relative",
            width: "unset",
          }}
        />
      )}

      {style === "outlined" && (
        <div className="button" style={buttonStyle}>
          {showLabel && <div className="button-label">{text}</div>}

          {showQty && <div className="text-wrapper">(00)</div>}
        </div>
      )}

      {style === "filled" && (
        <>
          <>
            {showLabel && (
              <div className="div" style={buttonStyle}>
                {text}
              </div>
            )}
          </>
        </>
      )}

      {showRightIcon && <>{override}</>}
    </div>
  );
};

ButtonPill.propTypes = {
  showLabel: PropTypes.bool,
  showRightIcon: PropTypes.bool,
  showLeftIcon: PropTypes.bool,
  showQty: PropTypes.bool,
  style: PropTypes.oneOf(["filled", "outlined"]),
  text: PropTypes.string,
};
