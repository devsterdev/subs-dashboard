import { useState } from "react";
import { Route, Routes } from "react-router-dom";


import Header from "./components/smallcom/Header";
import Navbar from "./components/smallcom/Navbar";
import Home from "./components/Pages/Home";
import Video from "./components/Pages/Video";
import Playlist from "./components/Pages/Playlist";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
