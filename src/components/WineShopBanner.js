import React from "react";
import "./WineShopBanner.css";

function WineShopBanner() {
  return (
    <div className="banner-block">
      <div className="banner-shadow-block">
        <div className="banner-text-wrap">
          <div className="banner-title-text">
          Happy Wine Happy Life<br />
          Happy For Ever
            <div className="banner-title-shadow-text">
            Happy Wine Happy Life<br />
              Happy For Ever
            </div>
          </div>
          <div className="banner-slogan-shadow-block"></div>
          <div className="banner-slogan-block">
            <span className="banner-slogan-text">Prices will surprise you!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WineShopBanner;