import React from 'react'
import { Link } from 'react-router-dom';




const Navbar = () => {
  return (

    <div className="w-full flex justify-center py-6 px-4 bg-transparent">
      <nav className="bg-white border-[5px] border-black rounded-2xl w-full max-w-4xl h-20 flex items-center justify-evenly px-2 sm:px-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-2">
        <button 
            className="text-center font-bold text-lg sm:text-2xl hover:bg-zinc-100 rounded-xl px-2 sm:px-4 py-2 transition-all text-black uppercase"
            style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
          >
            <Link to={'/'}>
              Home
            </Link>
          </button>
        <button 
            className="text-center font-bold text-lg sm:text-2xl hover:bg-zinc-100 rounded-xl px-2 sm:px-4 py-2 transition-all text-black uppercase"
            style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
          >
            <Link to={'/video'}>
              Video
            </Link>
          </button>
        <button 
            className="text-center font-bold text-lg sm:text-2xl hover:bg-zinc-100 rounded-xl px-2 sm:px-4 py-2 transition-all text-black uppercase"
            style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
          >
            <Link to={'/playlist'}>
              Playlist
            </Link>
          </button>
      </nav>
    </div>
  )
}

export default Navbar