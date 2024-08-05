import React from "react";
import WineCart from "../components/WineCart";

import sample2 from '../back2.mp4';

export const PageCart = () => {
  return (
    <div>
    <WineCart />
    <video autoPlay muted loop className="background-video1">
    <source src={sample2} type="video/mp4" />
  </video>
  </div>
  );
}