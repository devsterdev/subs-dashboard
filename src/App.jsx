import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import SearchElm from "./components/Search";
import data from "./data/data.json";

function App() {
  const [query, setQuery] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.uname.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto px-50 py-8">
        <Navbar />
        <SearchElm setQuery={setQuery} />
        <div className="grid grid-cols-3 gap-4">
          {filteredData.map((e) => (
            <List
              name={e.name}
              uname={e.uname}
              subs={e.subs}
              description={e.description}
              url={e.url}
              key={e.uname}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
