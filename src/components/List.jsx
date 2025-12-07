import React from "react";
import { ExternalLink, Trash2, Youtube } from "lucide-react";
// import pic from '../pic'
import pic from "../pic";

const List = ({ title, channelName, views, thumbnail, url }) => {
  return (
    <div
      className="w-full max-w-sm bg-white border-4 border-black p-4 flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all duration-300 group cursor-pointer m-5"
      onClick={() => window.open(url, "_blank")}
    >
      <div className="w-full aspect-video border-2 border-black mb-5 relative overflow-hidden bg-zinc-100 group-hover:border-black">
        <img
          src="https://img.youtube.com/vi/u9hauSrihYQ/maxresdefault.jpg"
          alt='Why do we ask questions? Michael "Vsauce" Stevens at TEDxVienna'
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              className="w-16 h-16 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.8)] transition-transform duration-300 group-hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                className="fill-white group-hover:fill-[#FF0000] transition-colors duration-300"
              />

              <polygon
                points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
                className="fill-black group-hover:fill-white transition-colors duration-300"
              />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-black uppercase leading-tight tracking-tight mb-3 line-clamp-3 w-full px-1">
        {title}
      </h2>

      <div className="w-16 h-1.5 bg-black mb-5"></div>

      <div className="flex justify-between w-full text-xs font-bold border-y-2 border-black py-3 mb-6 uppercase tracking-wider">
        <span>{channelName}</span>
        <span>{views} views</span>
      </div>

      <a
        href="https://youtu.be/u9hauSrihYQ?si=3LQGcxUqeEg1SZyQ"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full block bg-black text-white font-black text-sm py-4 uppercase hover:bg-white hover:text-black border-2 border-black transition-colors text-center"
        onClick={(e) => e.stopPropagation()}
      >
        Watch Video
      </a>
    </div>
  );
};

export default List;
