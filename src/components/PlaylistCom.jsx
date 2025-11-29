import { ListVideo } from 'lucide-react'
import React from 'react'

const PlaylistCom = () => {
  return (
     <div 
      className="w-full max-w-sm bg-white border-4 border-black p-4 flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all duration-300 group cursor-pointer" 
      onClick={() => window.open("*", '_blank')}
    >
      
      {/* 1. Thumbnail Area with Playlist Overlay */}
      <div className="w-full aspect-video border-2 border-black mb-5 relative overflow-hidden bg-zinc-100 group-hover:border-black flex">
        {/* Main Image */}
        <div className="h-full flex-grow relative overflow-hidden">
             <img 
            src={"*"} 
            alt="This is title"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
            />
        </div>

        {/* Playlist Indicator Sidebar (Right side black bar) */}
        <div className="w-1/3 h-full bg-black/90 flex flex-col items-center justify-center text-white border-l-2 border-white/20 group-hover:bg-black transition-colors">
            <span className="text-2xl font-black mb-1">42</span>
            <span className="text-[10px] font-bold uppercase tracking-widest mb-2">Videos</span>
            <ListVideo className="w-8 h-8 opacity-80 group-hover:scale-110 transition-transform duration-300" />
            
        </div>
      </div>
      
      {/* 2. Title Section */}
      <h2 className="text-xl font-black uppercase leading-tight tracking-tight mb-3 line-clamp-2 w-full px-1">
        This is title
      </h2>
      
      {/* 3. Decorative Dash */}
      <div className="w-16 h-1.5 bg-black mb-5"></div>
      
      {/* 4. Stats Section (Bordered) */}
      <div className="flex justify-between w-full text-xs font-bold border-y-2 border-black py-3 mb-6 uppercase tracking-wider">
        <span>By Dester</span>
        <span>50 Items</span>
      </div>
      
      {/* 5. Action Button */}
      <a
        href={"*"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto w-full block bg-black text-white font-black text-sm py-4 uppercase hover:bg-white hover:text-black border-2 border-black transition-colors text-center"
        onClick={(e) => e.stopPropagation()}
      >
        View Playlist
      </a>

    </div>
  )
}

export default PlaylistCom