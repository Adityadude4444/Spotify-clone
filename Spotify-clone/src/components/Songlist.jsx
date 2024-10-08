import React from "react";

const Songlist = ({ name, image, duration, alname, id }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 text-[#a7a7a7] hover:bg-[#ffffff2b] items-center">
      <div className="flex gap-2 items-center">
        <p>{id + 1}</p>
        <div className="flex gap-2 p-2">
          <img src={image} className="w-7" />
          <p>{name}</p>
        </div>
      </div>

      <p className="hidden lg:block">{alname}</p>
      <p className="hidden lg:block">5 days ago</p>
      <p>{duration}</p>
    </div>
  );
};

export default Songlist;
