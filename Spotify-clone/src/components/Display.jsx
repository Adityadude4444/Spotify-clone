import React from "react";
import { Route, Routes } from "react-router-dom";
import { DisplayHome } from "./DisplayHome";

const Display = () => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<DisplayHome />} />
      </Routes>
    </>
  );
};

export default Display;
