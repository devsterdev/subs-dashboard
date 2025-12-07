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
      <div className="container mx-auto px-50 py-8">
        <SearchElm setQuery={setQuery} />

        <div className="flex flex-wrap gap-4 w-full justify-center">
          {filteredData.map((e, index) => {
            return <Subs key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
