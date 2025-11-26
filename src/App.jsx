import { useState } from "react";
import {Route, Routes} from 'react-router-dom'

import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Playlist from "./Pages/Playlist";

function App() {

  return (
    <>
      <div>
      </div>
      <div className="container mx-auto px-50 py-8">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/video" element={<Video />}/>
          <Route path="/playlist" element={<Playlist />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
