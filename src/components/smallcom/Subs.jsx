import { Youtube, ExternalLink, Users, Play } from "lucide-react";
import React from "react";

const Subs = ({ name, uname, subs, numOfVid, tag, url, pfp }) => {
  return (
    <div className="group bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden flex flex-col h-[500px] w-[360px] m-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
      <div className="h-24 bg-gray-100 border-b-4 border-black relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        ></div>
        <div className="absolute -left-4 -top-4 w-16 h-16 bg-black rounded-full mix-blend-multiply opacity-10 transition-transform duration-500 group-hover:scale-125"></div>
        <div className="absolute right-10 top-2 w-8 h-8 bg-black rotate-45 opacity-10 transition-transform duration-500 group-hover:rotate-90"></div>
      </div>

      <div className="p-6 pt-0 flex flex-col items-center flex-grow relative z-10">
        <div className="relative -mt-12 mb-4">
          <div className="relative transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <img
              src={pfp}
              alt={name}
              className="w-24 h-24 rounded-full border-4 border-black bg-white object-cover"
              onError={(e) => {
                e.target.src = "https://ui-avatars.com/api/?name=" + name + "&background=random";
              }}
            />
            <div className="absolute bottom-0 right-0 bg-red-600 text-white p-1 rounded-full border-2 border-black">
              <Youtube size={16} fill="white" />
            </div>
          </div>
        </div>

        <div className="text-center w-full">
          <h3 className="text-2xl font-black uppercase leading-tight truncate px-2">
            {name}
          </h3>

          <p className="text-gray-600 font-bold text-sm mt-1 mb-3">
            @{uname}
          </p>

          <div className="flex justify-center items-center gap-4 my-4 w-full border-y-2 border-black py-3 bg-gray-50">
            <div className="flex flex-col items-center">
              <Users size={20} strokeWidth={2.5} />
              <span className="font-bold text-sm">{subs}</span>
            </div>

            <div className="w-0.5 h-8 bg-black/20"></div>

            <div className="flex flex-col items-center">
              <Play size={20} strokeWidth={2.5} />
              <span className="font-bold text-sm">{numOfVid}</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {tag.map((e, index) => {
              return (
                <span
                  key={index}
                  className="text-xs font-bold border border-black px-2 py-0.5 rounded-md bg-white transition-all hover:bg-black hover:text-white hover:-translate-y-0.5 cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none"
                >
                  #{e}
                </span>
              );
            })}
          </div>
        </div>

        <div className="mt-auto w-full">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-6 font-black uppercase tracking-wider border-2 border-black flex items-center justify-center gap-2 bg-black text-white 
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
            transition-all 
            hover:bg-gray-900 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Visit Channel <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subs;
