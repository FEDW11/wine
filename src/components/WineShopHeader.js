import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "./WineShopHeader.css";

function WineShopHeader() {

  const [itemsAmount, setItemsAmount] = useState(0);

  const itemsInCart = useSelector(state => state.wines.cart);

  const amount = itemsInCart.reduce( (r, v) => r + v.amount, 0);
  if (itemsAmount !== amount) {
    setItemsAmount(amount);
  };

  const memoizeedRenderResult = useMemo( () => {

    return (
      <header>
        <NavLink to="/" className="header-title">Happy</NavLink>

       

        <NavLink to="/cart" className="header-cart-link">
          <div className="header-cart-block">
            <div className="header-cart-text">
              Cart
            </div>
            <div className="header-cart-line"></div>
            <div className="header-cart-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.42245 19.8203C7.84445 19.8203 8.18745 20.1633 8.18745 20.5853C8.18745 
                21.0073 7.84445 21.3493 7.42245 21.3493C7.00045 21.3493 6.65845 21.0073 6.65845 20.5853C6.65845 20.1633 7.00045 19.8203 
                7.42245 19.8203Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M18.6749 19.8203C19.0969 19.8203 19.4399 20.1633 19.4399 20.5853C19.4399 
                21.0073 19.0969 21.3493 18.6749 21.3493C18.2529 21.3493 17.9099 21.0073 17.9099 20.5853C17.9099 20.1633 18.2529 19.8203 
                18.6749 19.8203Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.75 3.25L4.83 3.61L5.793 15.083C5.871 16.018 6.652 16.736 7.59 16.736H18.502C19.398 16.736 20.158 16.078 20.287 
                15.19L21.236 8.632C21.353 7.823 20.726 7.099 19.909 7.099H5.164" stroke="white" strokeWidth="1.5" strokeLinecap="round" 
                strokeLinejoin="round"/>
                <path d="M14.1255 10.795H16.8985" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className={itemsAmount > 0 ? "header-cart-sticker" : "header-cart-sticker_hidden"}>
                {itemsAmount}
              </div>
            </div>
          </div>
        </NavLink>
      </header>
    );
  }, [itemsAmount]
  );

  return memoizeedRenderResult;
}

export default WineShopHeader;
