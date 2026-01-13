import React from "react";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="flex flex-col justify-center">
      <label className="text-center font-bold">Search by ID:</label>
      <div className="">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pr-10 text-sm text-gray-700 shadow-sm focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400"
        />
      </div>
    </div>
  );
};

export default SearchBar;
