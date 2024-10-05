import React from "react";
import { assets } from "../assets/assets";

const Album = ({ image, name, desc, id }) => {
  return (
    <div className="w-[180px] p-2">
      <img src={image} className="rounded" />
      <p className="font-semibold">{name}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Album;
