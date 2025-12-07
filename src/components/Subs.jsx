import { Youtube, ExternalLink, Users, Play } from "lucide-react";
import React, { useState } from "react";

const Subs = () => {
  const [tags, setTags] = useState(["DSA", "C++", "WebDev"]);

  return (
    <>
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-lg overflow-hidden flex flex-col h-125 transform transition-transform hover:-translate-y-1 max-w-sm mx-auto w-90">
        <div className="h-24 bg-gray-100 border-b-4 border-black relative flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "10px 10px",
            }}
          ></div>
          <div className="absolute -left-4 -top-4 w-16 h-16 bg-black rounded-full mix-blend-multiply opacity-10"></div>
          <div className="absolute right-10 top-2 w-8 h-8 bg-black rotate-45 opacity-10"></div>
        </div>

        <div className="p-6 pt-0 flex flex-col items-center flex-grow -mt-12 relative z-10">
          <div className="relative group">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4"
              alt="CodeHelp"
              className="w-24 h-24 rounded-full border-4 border-black bg-white object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-red-600 text-white p-1 rounded-full border-2 border-black">
              <Youtube size={16} fill="white" />
            </div>
          </div>

          <div className="text-center mt-4 w-full">
            <h3 className="text-2xl font-black uppercase leading-tight truncate px-2">
              CodeHelp
            </h3>

            <p className="text-gray-600 font-bold text-sm mt-1 mb-3">
              @LoveBabbar
            </p>

            <div className="flex justify-center items-center gap-4 my-4 w-full border-y-2 border-black py-3 bg-gray-50">
              <div className="flex flex-col items-center">
                <Users size={20} strokeWidth={2.5} />
                <span className="font-bold text-sm">1.2M</span>
              </div>
              <div className="w-0.5 h-8 bg-black/20"></div>
              <div className="flex flex-col items-center">
                <Play size={20} strokeWidth={2.5} />
                <span className="font-bold text-sm">450</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="text-xs font-bold border border-black px-2 py-0.5 rounded-md bg-white">
                #DSA
              </span>
              <span className="text-xs font-bold border border-black px-2 py-0.5 rounded-md bg-white">
                #C++
              </span>
              <span className="text-xs font-bold border border-black px-2 py-0.5 rounded-md bg-white">
                #WebDev
              </span>
            </div>
          </div>

          <div className="mt-auto w-full">
            <button className="w-full py-3 px-6 font-black uppercase tracking-wider border-2 border-black transition-all active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2 bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-900">
              Visit Channel <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subs;
