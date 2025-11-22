import React from 'react';
import { ExternalLink, Trash2 } from 'lucide-react';
import pic from '../pic'

const List = ({name, uname, subs, desc, url}) => {
  return (
    <div className="group relative bg-white border-2 border-black p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 transition-all duration-200 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full  mt-5">
      
      {/* Left: Avatar Circle */}
      <div className="shrink-0">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-3xl font-black"><img src={pic.Vsauce} /></span>
        </div>
      </div>

      {/* Middle: Content */}
      <div className="flex-grow text-center sm:text-left w-full space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <h2 className="text-2xl font-black text-black tracking-tight uppercase">
            {name}
          </h2>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div className="space-y-0.5 min-w-[120px]">
            <p className="text-black font-bold text-sm bg-black text-white inline-block px-1">
              @{uname}
            </p>
            <p className="text-gray-600 text-xs font-mono pt-1 font-bold">
              {subs} subs
            </p>
          </div>

          {/* Description Box */}
          {(
            <div className="hidden sm:block flex-grow text-sm text-black font-medium leading-relaxed border-l-4 border-black pl-4 py-1 italic">
              {desc}
            </div>
          )}
        </div>
      </div>

      {/* Right: Visit Button & Actions */}
      <div className="shrink-0 flex flex-row sm:flex-col items-center gap-3 self-center sm:self-center pt-4 sm:pt-0 w-full sm:w-auto justify-center">
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-2 border-2 border-black text-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-all bg-white text-center flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
        >
          Visit <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  )
}

export default List