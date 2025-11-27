import React, { useState } from "react";

import { ExternalLink } from "lucide-react";
import data from "../data/data.json";
import SearchElm from "../components/Search";

const Home = () => {

  const [query, setQuery] = useState("")

    const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.uname.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
    <div className="container mx-auto px-50 py-8">

    

    <SearchElm setQuery={setQuery} />

<div className="grid grid-cols-2 gap-4">
    {filteredData.map((e, index) => (
         
      <div key={index} className="w-[36rem] max-w-full bg-white border-[6px] border-black p-6 flex flex-col sm:flex-row justify-between items-center shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[3px] hover:translate-x-[3px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all gap-5 sm:gap-0">
        <div className="flex gap-5 items-center flex-col sm:flex-row text-center sm:text-left">
          <img
            // src={data.pfpUrl}
            alt={e.name}
            className="w-24 h-24 border-[3px] border-black object-cover rounded-full"
          />
          <div>
            <h3 className="text-3xl sm:text-4xl font-black uppercase leading-none tracking-tight">
              {e.name}
            </h3>
            <p className="text-lg font-bold uppercase text-zinc-600 mt-1.5">
              {e.uname}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-3 min-w-[120px] w-full sm:w-auto">
          <span className="text-xl font-black uppercase border-b-[3px] border-black pb-1.5">
            {e.subs}
          </span>
          <div className="w-full sm:w-36">
            <a
              href={e.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-black text-white text-base font-bold py-2 uppercase border-[3px] border-black hover:bg-white hover:text-black transition-colors"
            >
              <span>Visit</span> <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      
       ))}
       </div>
       </div>
    </>
  );
};

export default Home;
