import React from "react";
import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="w-[20%] h-[85%] pl-3 hidden lg:block">
      <div className=" flex flex-col gap-4 pt-4">
        <div className="flex flex-col bg-[#121212] rounded-lg">
          <div className="flex items-center gap-3 p-2">
            <img src={assets.home_icon} className="w-5 h-5" />
            <p className="font-bold">Home</p>
          </div>
          <div className="flex items-center gap-2 p-2">
            <img src={assets.search_icon} className="w-5 h-5" />
            <p className="font-bold">Search</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 p-2">
              <img src={assets.stack_icon} className="w-10 h-10" />
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={assets.arrow_right} className="w-5 h-5 " />
              <img src={assets.plus_icon} className="w-5 h-5 " />
            </div>
          </div>

          <div className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-2 p-3 bg-stone-900 rounded-lg">
              <p className="font-bold">Create your first playlist</p>
              <p>it's easy we help you</p>
              <button className="rounded-full text-black bg-white w-fit p-2 font-semibold">
                Create Playlist
              </button>
            </div>
            <div className="flex flex-col gap-2 p-3 bg-stone-900 rounded-lg">
              <p className="font-bold">Let's findsome podcasts to follow</p>
              <p>we'll keep you update on new episode</p>
              <button className="rounded-full text-black bg-white w-fit p-2 font-semibold">
                Browse podcasts
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
