import React from "react";
import { ButtonPill } from "../../components/ButtonPill";
import { ButtonQtyStepper } from "../../components/ButtonQtyStepper";
import { IconCalendar } from "../../components/IconCalendar";
import { MPrimaryNav } from "../../components/MPrimaryNav";
import "./style.css";

export const MyBasket = () => {
  return (
    <div className="my-basket">
      <div className="div-2">
        <div className="overlap-group">
          <div className="cart">
            <div className="card-horizontal">
              <div
                className="image"
                style={{
                  backgroundImage:
                    "url(https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/image-2@2x.png)",
                }}
              />
              <div className="item-info">
                <div className="name-and-price">
                  <div className="item-name">Crimson Sweet melon</div>
                  <div className="element-qty">$0.89/lb</div>
                </div>
                <ButtonQtyStepper />
              </div>
            </div>
            <div className="card-horizontal-2">
              <div
                className="image-2"
                style={{
                  backgroundImage:
                    "url(https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/image-1@2x.png)",
                }}
              />
              <div className="item-info-2">
                <div className="name-and-price-2">
                  <div className="item-name-2">Shiitakes</div>
                  <div className="element-qty-2">$8.99/lb</div>
                </div>
                <ButtonQtyStepper />
              </div>
            </div>
            <div className="card-horizontal-3">
              <div
                className="image-3"
                style={{
                  backgroundImage:
                    "url(https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/image@2x.png)",
                }}
              />
              <div className="item-info-3">
                <div className="name-and-price-3">
                  <div className="item-name-3">Bartlett pears</div>
                  <div className="element-qty-3">$1.99/ea</div>
                </div>
                <ButtonQtyStepper />
              </div>
            </div>
          </div>
          <div className="checkout-overlay">
            <div className="rectangle" />
            <div className="frame-2">
              <div className="text-wrapper-2">Subtotal</div>
              <div className="text-wrapper-3">$29.01</div>
            </div>
            <ButtonPill
              buttonStyle={{
                flex: "1",
                width: "unset",
              }}
              override={
                <IconCalendar
                  icon="https://generation-sessions.s3.amazonaws.com/ac7a4a0fdde4d2715c3c1fb1cce4e4ee/img/icon.svg"
                  style={{
                    minWidth: "20px",
                    width: "unset",
                  }}
                />
              }
              showLeftIcon={false}
              style="filled"
              styleOverride={{
                alignSelf: "stretch",
                width: "unset",
              }}
              text="Schedule a pick-up"
            />
          </div>
        </div>
        <h1 className="h-1">My basket</h1>
        <MPrimaryNav
          style={{
            left: "0",
            position: "absolute",
            top: "0",
          }}
        />
      </div>
    </div>
  );
};
