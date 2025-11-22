import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'
import List from './components/List'

function App() {

  return (
    <>
    <div className='container mx-auto px-50 py-8'>
      <Navbar />
      <List name="Vsause" uname="vsause" subs="24M" desc="This is my fav channel" url="*" />  
    </div>
    </>
  )
}

export default App
