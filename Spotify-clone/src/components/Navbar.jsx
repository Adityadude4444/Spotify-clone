import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <img
            onClick={() => {
              Navigate(-1);
            }}
            src={assets.arrow_left}
            className="h-6 cursor-pointer"
          />
          <img
            onClick={() => {
              Navigate(1);
            }}
            src={assets.arrow_right}
            className="h-6 cursor-pointer"
          />
        </div>
        <div className="flex gap-4">
          <button className="rounded-full text-black bg-white w-fit p-2 font-medium">
            Explore Premium
          </button>
          <button className="rounded-full w-fit p-2 font-medium">
            Install App
          </button>
          <p className="w-7 h-7 p-5 text-center text-[20px] rounded-3xl flex items-center bg-purple-700 text-black justify-center">
            A
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <p className="px-3 py-1 bg-white text-black rounded-2xl ">All</p>
        <p className="px-3 py-1 border rounded-2xl">Music</p>
        <p className="px-3 py-1 border rounded-2xl">Podcast</p>
      </div>
    </div>
  );
};
