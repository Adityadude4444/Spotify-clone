import React from "react";
import { Route, Routes } from "react-router-dom";
import { DisplayHome } from "./DisplayHome";
import Displayalbum from "./Displayalbum";

const Display = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DisplayHome />} />
        <Route path={"/album/:id"} element={<Displayalbum />} />
      </Routes>
    </>
  );
};

export default Display;
