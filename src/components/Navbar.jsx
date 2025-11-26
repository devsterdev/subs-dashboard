import React from 'react'


  const NAV_ITEMS = ['HOME', 'VIDEOS', 'PLAYLIST', 'ABOUT'];

const Navbar = () => {
  return (

    <div className="w-full flex justify-center py-6 px-4 bg-transparent">
      <nav className="bg-white border-[5px] border-black rounded-2xl w-full max-w-4xl h-20 flex items-center justify-evenly px-2 sm:px-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-2">
        {/* {NAV_ITEMS.map((item) => (
          
        ))} */}
        <button 
            className="text-center font-bold text-lg sm:text-2xl hover:bg-zinc-100 rounded-xl px-2 sm:px-4 py-2 transition-all text-black uppercase"
            style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
          >
            Home
          </button>
        <button 
            className="text-center font-bold text-lg sm:text-2xl hover:bg-zinc-100 rounded-xl px-2 sm:px-4 py-2 transition-all text-black uppercase"
            style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
          >
            Video
          </button>
        <button 
            className="text-center font-bold text-lg sm:text-2xl hover:bg-zinc-100 rounded-xl px-2 sm:px-4 py-2 transition-all text-black uppercase"
            style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
          >
            Playlist
          </button>
      </nav>
    </div>
  )
}

export default Navbar




    // <div className="w-full flex justify-center py-4 bg-zinc-50">
    //   <nav className="bg-white border-[5px] border-black rounded-xl w-full max-w-4xl h-25 flex items-center justify-between px-2 sm:px-6 shadow-sm">
    //     {NAV_ITEMS.map((item) => (
    //       <button 
    //         key={item} 
    //         className="flex-1 text-center font-bold text-xl sm:text-2xl hover:bg-zinc-100 rounded-xl py-2 transition-all text-black"
    //         style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
    //       >
    //         {item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1)}
    //       </button>
    //     ))}
    //   </nav>
    // </div>