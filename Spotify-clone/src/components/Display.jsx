import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { DisplayHome } from "./DisplayHome";
import Displayalbum from "./Displayalbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  const dispalyref = useRef();
  const location = useLocation();
  const isalbum = location.pathname.includes("album");
  const album = isalbum ? location.pathname.slice(-1) : "";
  const bgcolur = albumsData[Number(album)].bgColor;
  useEffect(() => {
    if (isalbum) {
      console.log(bgcolur);
      dispalyref.current.style.background = `linear-gradient(${bgcolur},#121212)`;
    } else {
      dispalyref.current.style.background = `#121212`;
    }
  });

  return (
    <div ref={dispalyref} className="p-5 w-[100%] lg:w-[80%]">
      <Routes>
        <Route path={"/"} element={<DisplayHome />} />
        <Route path={"/album/:id"} element={<Displayalbum />} />
      </Routes>
    </div>
  );
};

export default Display;
