import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";

const SearchElm = ({ setQuery }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
    setQuery(text);
  };

  return (
    <div className="max-w-md relative group w-full m-8">
      <input
        type="text"
        placeholder="SEARCH STACK..."
        value={value}
        onChange={handleChange}
        className="w-full bg-white border-4 border-black px-4 py-3 text-lg font-bold uppercase placeholder-gray-400 outline-none shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
      />
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-black pointer-events-none" />
    </div>
  );
};

export default SearchElm;
