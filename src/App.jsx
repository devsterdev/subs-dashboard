import { useState } from "react";
import {Route, Routes} from 'react-router-dom'

import "./App.css";
import Navbar from "./components/Navbar";
import SearchElm from "./components/Search";
import data from "./data/data.json";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Video from "./Pages/Video";
import Playlist from "./Pages/Playlist";

function App() {
  const [query, setQuery] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.uname.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div>
        {/* <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/video" element={<Video />}/>
          <Route path="/playlist" element={<Playlist />}/>
        </Routes> */}
      </div>
      <div className="container mx-auto px-50 py-8">
        <Header />
        <Navbar />
        <SearchElm setQuery={setQuery} />
        <div className="grid grid-cols-2 gap-4">
          {filteredData.map((e) => (
            <Home name={e.name} uname={e.uname} subs={e.subs} url={e.url} key={e.uname}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
