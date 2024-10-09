import React from "react";
import { Navbar } from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import Album from "./Album";
import Musicalbum from "./musicalbum";

export const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="font-bold text-xl my-4">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <Album
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl my-4">Today's biggest hits</h1>
          <div className="flex overflow-auto mb-7">
            {songsData.map((item, index) => (
              <Musicalbum
                key={index}
                image={item.image}
                name={item.name}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
