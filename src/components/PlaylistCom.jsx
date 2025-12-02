import { FolderOpen, Heart, Play } from "lucide-react";
import React from "react";

const PlaylistCom = ({ index, title, author, videos, link }) => {
  return (
    <div className="w-full max-w-sm group cursor-pointer mb-10">
      <div className="w-1/3 h-8 bg-black rounded-t-lg border-x-4 border-t-4 border-black relative top-1 ml-4 z-0"></div>
      <div className="bg-white border-4 border-black rounded-lg rounded-tl-none p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform relative z-10 min-h-[180px] flex flex-col justify-between h-65">
        <div className="flex justify-between items-start border-b-4 border-black pb-2 mb-2">
          <div className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            <span className="font-bold uppercase text-sm">
              Playlist.0{index}
            </span>
          </div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>

        <div>
          <h3 className="font-black text-2xl uppercase leading-none mb-1">
            {title}
          </h3>
          <p className="font-mono text-xs text-zinc-500 mb-2">
            Author by {author}
          </p>
          <div className="space-y-1 mt-3">
            <div className="w-full h-2 bg-zinc-100 border border-zinc-200"></div>
            <div className="w-2/3 h-2 bg-zinc-100 border border-zinc-200"></div>
            <div className="w-4/5 h-2 bg-zinc-100 border border-zinc-200"></div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-end">
          <div className="text-xs font-mono bg-zinc-100 px-2 py-1 border-2 border-black rounded">
            {videos}
          </div>
          <div className="flex gap-2">
            <a
              className="p-2 bg-black text-white border-2 border-black hover:bg-zinc-800 rounded"
              href={link}
              target="_blank"
            >
              <Play className="w-4 h-4 fill-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCom;
