"use client";
import Category from "@/components/Category/Category";

import Search from "@/components/Search/Search";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      <div className="flex justify-between items-center max-w-5xl mx-auto mt-6">
        <Category />
        <Search />
      </div>
    </>
  );
}
