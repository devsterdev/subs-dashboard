import React from 'react'
import pic from '../pic'

const Navbar = () => {
  return (

    <div className="container mx-auto px-4 py-8 border-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          className="w-40 h-40 md:w-60 md:h-60 rounded-full object-cover"
          src={pic.Mypic}
          alt="My profile"
        />
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            YouTubers I’ve Subscribed To
          </h1>
          <p className="text-gray-700 bg-blue-100 p-4 rounded">
            Yoo guys this is Devster's fav Youtube channels, 
          </p>
        </div>
      </div>
    </div>

  )
}

export default Navbar