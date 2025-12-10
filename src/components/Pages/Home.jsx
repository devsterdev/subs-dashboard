import React, { useState } from "react";
import data from "../../data/data.json"
import Subs from "../smallcom/Subs";
import SearchElm from "../smallcom/Search";

const Home = () => {
  const [query, setQuery] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.uname.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <>
      <div>
        <div className="">
          <SearchElm setQuery={setQuery} />
        </div>

        <div className="flex flex-wrap gap-4 w-full justify-center">
          {filteredData.map((e, index) => {
            return <Subs key={index} name={e.name} uname={e.uname} subs={e.subs} numOfVid={e.numOfVid} tag={e.tag} url={e.url} pfp={e.pfp} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
