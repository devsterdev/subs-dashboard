import { useState } from 'react'


import './App.css'
import Navbar from './components/Navbar'
import List from './components/List'
import SearchElm from './components/Search'

function App() {

  return (
    <>
    <div className='container mx-auto px-50 py-8'>
      <Navbar />
      <SearchElm />
      <div className='grid grid-cols-3 gap-4'>
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
        <List name="Vsause" uname="vsause" subs="24M" description="This is my fav channel" url="*" />  
      </div>
    </div>
    </>
  )
}

export default App
