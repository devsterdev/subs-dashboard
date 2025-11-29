import React from 'react'
import { Play } from 'lucide-react';

const PlaylistCom2 = () => {
  return (
    <div className="w-full max-w-sm bg-zinc-100 border-4 border-black p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all cursor-pointer group">
    <div className="bg-black text-white text-xs font-bold uppercase px-2 py-1 mb-2 inline-block -rotate-1">Mixtape Vol. 1</div>
    <div className="bg-white border-4 border-black rounded-lg p-4 relative overflow-hidden">
      {/* Tape Spools */}
      <div className="flex justify-between items-center mb-4 px-4 relative z-10">
        <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center animate-spin"><div className="w-4 h-4 bg-black rounded-full"></div></div>
        <div className="h-8 w-full border-y-2 border-black mx-2 opacity-20"></div>
        <div className="w-12 h-12 rounded-full border-4 border-black flex items-center justify-center animate-spin"><div className="w-4 h-4 bg-black rounded-full"></div></div>
      </div>
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
        <img src="https://i.ytimg.com/vi/tlJVWvzOnlw/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCY2915bjl7WIqY9ACwhVrUOkr_hQ" className="w-full h-full object-cover grayscale" alt="tape bg" />
      </div>
      <div className="relative z-10 text-center border-t-4 border-black pt-2 mt-2">
         <h3 className="font-black uppercase text-lg leading-none">This is the title</h3>
         <p className="font-mono text-xs text-zinc-500 mt-1">24 Tracks • By Devster</p>
      </div>
    </div>
    <button className="w-full mt-4 bg-black text-white font-bold py-2 uppercase rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
      <Play className="w-4 h-4 fill-white" /> Play Side A
    </button>
  </div>
  )
}

export default PlaylistCom2