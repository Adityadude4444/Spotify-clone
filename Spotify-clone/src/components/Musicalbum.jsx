import React from "react";

const Musicalbum = ({ image, name, desc, id }) => {
  return (
    <div className="w-[180px] p-2">
      <img src={image} className="rounded" />
      <p className="font-semibold">{name}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Musicalbum;
