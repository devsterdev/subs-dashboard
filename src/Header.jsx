import React from 'react'

  const NAV_ITEMS = ['HOME', 'VIDEOS', 'PLAYLIST', 'ABOUT'];

const Header = () => {



  return (
    <div className="w-full flex justify-center py-4 bg-zinc-50">
      <nav className="bg-white border-[5px] border-black rounded-2xl w-full max-w-4xl h-20 flex items-center justify-between px-2 sm:px-6 shadow-sm">
        {NAV_ITEMS.map((item) => (
          <button 
            key={item} 
            className="flex-1 text-center font-bold text-xl sm:text-2xl hover:bg-zinc-100 rounded-xl py-2 transition-all text-black"
            style={{ fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif' }}
          >
            {item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1)}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Header