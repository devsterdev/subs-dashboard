import React from 'react'
import pic from '../pic'

const Navbar = () => {
  return (
    // <div>
    //   <div className='flex'>
    //     <img className='w-60 h-50 rounded-full' src={pic.Mypic} />
    //     <div className='flex flex-col  container  justify-center'>
    //         <h1 className='text-3xl font-bold'>Youtubers I Have Subscribe to </h1>
    //         <p className='bg-blue-100 '>This is my page where i m goig to put show my fav youtuber channels</p>
    //     </div>
    //   </div>
    // </div>

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