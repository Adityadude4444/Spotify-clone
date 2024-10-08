import React from "react";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import { Navbar } from "./Navbar";
import { assets } from "../assets/assets";
import Songlist from "./Songlist";

const Displayalbum = () => {
  const { id } = useParams();
  console.log(albumsData[id]);
  return (
    <div className="p-5 w-[100%] lg:w-[80%]">
      <Navbar />
      <div className="flex gap-2">
        <div>
          <img src={albumsData[id].image} className="w-[250px] p-4" />
        </div>
        <div className="flex flex-col w-full p-4 gap-2">
          <p className="mt-[10px]">Playlist</p>
          <p className="text-6xl font-bold">{albumsData[id].name}</p>
          <p>{albumsData[id].desc}</p>
          <div className="flex gap-1">
            <img src={assets.spotify_logo} className="w-5" />
            <p className="font-semibold">Spotify</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 text-[#dcd5d5]">
        <div className="flex gap-2">
          <p>#</p>

          <p>title</p>
        </div>

        <p className="hidden lg:block">Album</p>
        <p className="hidden lg:block">Data added</p>
        <p>time</p>
      </div>
      <div className="flex flex-col gap-2">
        {songsData.map((item, index) => (
          <Songlist
            key={index}
            id={item.id}
            name={item.name}
            alname={albumsData[id].name}
            image={item.image}
            duration={item.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Displayalbum;
