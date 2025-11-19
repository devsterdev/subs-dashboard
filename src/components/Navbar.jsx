import React from 'react'
import pic from '../pic'

const Navbar = () => {
  return (
    <div>
      <div className='flex'>
        <img className='w-60 h-50 rounded-full' src={pic.Mypic} />
        <div className='flex flex-col  container justify-center'>
            <h1 className='text-3xl font-bold'>Youtubers I Have Subscribe to </h1>
            <p className='bg-blue-100 '>This is my page where i m goig to put show my fav youtuber channels</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar