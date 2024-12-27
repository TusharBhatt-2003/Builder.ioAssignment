"use client";
import React, { useState } from "react";
export default function Category() {
  // State to track the active item
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // List of categories
  const categories = [
    "view all",
    "healthcare trends",
    "AI insights",
    "case studies",
    "best practices",
  ];

  return (
    <>
      <ul className="flex gap-5 text-sm capitalize">
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer font-semibold ${
              activeIndex === index ? "text-[#00C7BE]" : "text-[#595959]"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </>
  );
}
