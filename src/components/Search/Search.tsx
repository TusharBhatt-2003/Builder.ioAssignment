import Image from "next/image";
import React from "react";

// The Search component receives a function to update the search query
interface SearchProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ setSearchQuery }: SearchProps) {
  return (
    <div className="flex border-2 border-[#00C7BE] rounded-lg py-2 px-4">
      <Image src="/search.svg" alt="search" width="25" height="25" />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchQuery(e.target.value)} // Update the search query on input change
        className="px-3 outline-none placeholder:text-gray-500 w-full"
      />
      <Image src="/filter.svg" alt="filter" width="25" height="25" />
    </div>
  );
}
