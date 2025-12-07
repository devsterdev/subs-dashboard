import React from "react";
import pic from "../pic";
import { MessageSquareDashed, Sparkles, Zap } from "lucide-react";

const Header = () => {
  return (
    <div className="w-full max-w-6xl mx-auto mb-12 font-sans">
      <div className="flex justify-between items-end mb-2 px-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-2 h-8 bg-black skew-x-12"></div>
          ))}
        </div>
        <div className="font-mono text-xs font-bold tracking-widest text-gray-400">
          ID: USER_SUB_LIST_V24
        </div>
      </div>
      <div className="relative bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="absolute -top-4 -left-4 text-9xl font-black text-gray-100 select-none z-0 pointer-events-none opacity-50">
          CONTENT
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="absolute top-0 right-0 md:right-10 transform rotate-12 bg-yellow-400 border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Zap size={24} fill="white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 relative inline-block leading-none">
            <span className="relative z-10 block md:inline">
              YouTubers I've
            </span>
            <span
              className="relative z-10 text-white px-4 py-1 inline-block transform md:-rotate-1 mt-2 md:mt-0 md:ml-4"
              style={{
                textShadow:
                  "4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                WebkitTextStroke: "2px black",
              }}
            >
              Subscribed To
              <span className="absolute inset-0 bg-yellow-400 -z-10 transform skew-x-6 border-2 border-black translate-x-1 translate-y-1"></span>
            </span>
          </h1>
          <div className="max-w-2xl mx-auto relative group cursor-default mt-2">
            <div className="absolute -inset-2 bg-gray-100 skew-y-1 rounded-sm -z-10 group-hover:bg-blue-100 transition-colors border border-transparent group-hover:border-black/10"></div>
            <p className="text-lg md:text-xl font-bold font-mono text-gray-800 flex items-center gap-3 justify-center">
              <MessageSquareDashed className="hidden md:block" size={20} />
              "Yoo guys this is Devster's fav Youtube channels"
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 border-l-4 border-b-4 border-black w-6 h-6"></div>
        <div className="absolute bottom-0 right-0 border-r-4 border-b-4 border-black w-6 h-6"></div>
        <div className="absolute top-0 left-0 border-l-4 border-t-4 border-black w-6 h-6"></div>
        <div className="absolute top-0 right-0 border-r-4 border-t-4 border-black w-6 h-6"></div>
      </div>
    </div>
  );
};

export default Header;
