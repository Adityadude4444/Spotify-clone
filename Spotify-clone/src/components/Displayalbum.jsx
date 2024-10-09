import React from "react";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import { Navbar } from "./Navbar";
import { assets } from "../assets/assets";
import Songlist from "./Songlist";

const Displayalbum = () => {
  const { id } = useParams();
  const albumId = parseInt(id, 10);
  const album = albumsData[albumId];
  if (!album) {
    return <div>Album not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex gap-2">
        <div>
          <img src={album.image} className="w-[250px] p-4" alt={album.name} />
        </div>
        <div className="flex flex-col w-full p-4 gap-2">
          <p className="mt-[10px]">Playlist</p>
          <p className="text-6xl font-bold">{album.name}</p>
          <p>{album.desc}</p>
          <div className="flex gap-1">
            <img src={assets.spotify_logo} className="w-5" alt="Spotify Logo" />
            <p className="font-semibold">Spotify</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 text-[#dcd5d5]">
        <div className="flex gap-2">
          <p>#</p>
          <p>Title</p>
        </div>
        <p className="hidden lg:block">Album</p>
        <p className="hidden lg:block">Date added</p>
        <p>Time</p>
      </div>
      <div className="flex flex-col gap-2">
        {songsData.map((item, index) => (
          <Songlist
            key={index}
            id={item.id}
            name={item.name}
            alname={album.name}
            image={item.image}
            duration={item.duration}
          />
        ))}
      </div>
    </>
  );
};

export default Displayalbum;
