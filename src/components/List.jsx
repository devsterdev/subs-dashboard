import React from 'react';
import { ExternalLink, Trash2, Youtube } from 'lucide-react';
import pic from '../pic'

const List = ({name, uname, subs, description, url}) => {
  return (
    // <div className="group relative bg-white border-2 border-black p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 transition-all duration-200 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[13px_13px_0px_0px_rgba(0,0,0,1)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full mt-5">
      
    //   {/* Left: Avatar Circle */}
    //   <div className="shrink-0">
    //     <div className="w-20 h-20 rounded-full bg-white border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
    //       <span className="text-3xl font-black"><img src={pic.Vsauce} /></span>
    //     </div>
    //   </div>

    //   {/* Middle: Content */}
    //   <div className="flex-grow text-center sm:text-left w-full space-y-3">
    //     <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
    //       <h2 className="text-2xl font-black text-black tracking-tight uppercase">
    //         {name}
    //       </h2>
    //     </div>
        
    //     <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
    //       <div className="space-y-0.5 min-w-[120px]">
    //         <p className="text-black font-bold text-sm bg-black text-white inline-block px-1">
    //           @{uname}
    //         </p>
    //         <p className="text-gray-600 text-xs font-mono pt-1 font-bold">
    //           {subs} subs
    //         </p>
    //       </div>

    //       {/* Description Box */}
    //       {(
    //         <div className="hidden sm:block flex-grow text-sm text-black font-medium leading-relaxed border-l-4 border-black pl-4 py-1 italic">
    //           {desc}
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   {/* Right: Visit Button & Actions */}
    //   <div className="shrink-0 flex flex-row sm:flex-col items-center gap-3 self-center sm:self-center pt-4 sm:pt-0 w-full sm:w-auto justify-center">
    //     <a 
    //       href={url} 
    //       target="_blank" 
    //       rel="noopener noreferrer"
    //       className="w-full sm:w-auto px-6 py-2 border-2 border-black text-black text-xs font-bold uppercase hover:bg-black hover:text-white transition-all bg-white text-center flex items-center justify-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
    //     >
    //       Visit <ExternalLink className="w-3 h-3" />
    //     </a>
    //   </div>
    // </div>

    <div className="w-full max-w-xs mx-auto bg-white border-4 border-black p-4 flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all duration-300">
      
      {/* Visual Header / Thumbnail Placeholder */}
      <div className="w-full aspect-video bg-zinc-100 border-2 border-black mb-4 flex items-center justify-center relative overflow-hidden group cursor-pointer" onClick={() => window.open(url, '_blank')}>
        {/* Giant background initial that darkens on hover */}
        <span className="text-8xl font-black text-zinc-200 absolute -bottom-4 -right-4 select-none group-hover:text-black transition-colors duration-300 z-0">
          V
        </span>
        <Youtube className="w-12 h-12 text-black relative z-10 transition-transform duration-300 group-hover:scale-110" />
      </div>
      
      {/* Title & Divider */}
      <h2 className="text-3xl font-black uppercase leading-none mb-1 tracking-tighter">{name}</h2>
      <div className="w-12 h-1 bg-black mb-3"></div>
      
      {/* Stats Row */}
      <div className="flex justify-between w-full text-xs font-bold border-y-2 border-black py-2 mb-4 uppercase">
        <span>{uname}</span>
        <span>{subs}</span>
      </div>
      
      {/* Description */}
      <p className="text-xs font-medium mb-6 line-clamp-3 min-h-[3em]">
        {description}
      </p>
      
      {/* Action Button */}
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full block bg-black text-white font-bold py-3 uppercase hover:bg-white hover:text-black border-2 border-black transition-colors text-center"
      >
        Visit Channel
      </a>
    </div>
  )
}

export default List