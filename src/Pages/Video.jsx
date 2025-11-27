import React from 'react'
import List from '../components/List'
import video from "../data/video.json"

const Video = () => {
  return (
    <div className='flex flex-wrap gap-4 w-full justify-center'>
      {video.map((e, index)=>{
        return(
            <List key={index} title={e.title} channelName={e.channelName} views={e.views} thumbnail={e.thumbnail} url={e.url} /> 
        )
      })}
      
    </div>
  )
}

export default Video

// 