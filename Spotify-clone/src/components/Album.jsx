import React from "react";
import { useNavigate } from "react-router-dom";

const Album = ({ image, name, desc, id }) => {
  const Navigate = useNavigate();
  return (
    <div
      className="w-[180px] p-2 cursor-pointer hover:bg-[#ffffff2b]"
      onClick={() => {
        Navigate(`/album/${id}`);
      }}
    >
      <img src={image} className="rounded" />
      <p className="font-semibold">{name}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Album;
