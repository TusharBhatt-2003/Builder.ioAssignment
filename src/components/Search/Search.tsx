import Image from "next/image";
import React from "react";

export default function Search() {
  return (
    <>
      <div className="flex border-2 border-[#00C7BE] rounded-lg py-2 px-4">
        <Image src="search.svg" alt="search" width="25" height="25" />
        <input
          placeholder="Search..."
          className="px-3 outline-none placeholder:text-"
        />
        <Image src="filter.svg" alt="search" width="25" height="25" />
      </div>
    </>
  );
}
