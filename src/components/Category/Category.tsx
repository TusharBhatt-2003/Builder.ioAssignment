"use client";

import React, { useState } from "react";
import Search from "../Search/Search";

interface CategoryProps {
  categories?: { category: string; link: string }[]; // Each category has a name and a link
}

const Category: React.FC<CategoryProps> = ({ categories = [] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex gap-10 justify-around">
      <ul className="flex gap-5 text-sm capitalize">
        {categories.map((item, index) => (
          <li key={index} className="cursor-pointer font-semibold">
            <a
              href={item.link}
              onClick={() => setActiveIndex(index)}
              className={`transition-colors duration-200 ${
                activeIndex === index
                  ? "text-[#00C7BE]"
                  : "text-[#595959] hover:text-[#00C7BE]"
              }`}
            >
              {item.category}
            </a>
          </li>
        ))}
      </ul>
      <Search />
    </div>
  );
};

export default Category;
