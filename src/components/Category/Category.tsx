import React, { useState } from "react";

interface CategoryProps {
  categories?: { category: string; link: string }[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const Category: React.FC<CategoryProps> = ({
  categories = [],
  setSelectedCategory,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCategoryClick = (category: string, index: number) => {
    setActiveIndex(index);
    setSelectedCategory(category);
  };

  const handleViewAll = () => {
    setSelectedCategory(null);
    setActiveIndex(null);
  };

  return (
    <div className="hidden md:flex text-xl">
      <ul className="flex gap-5 capitalize">
        {/* View All Button */}
        <button
          onClick={handleViewAll}
          className="text-[#00C7BE] hover:text-[#00C7BE] font-semibold transition-colors duration-200"
        >
          View All
        </button>
        {categories.length > 0 ? (
          categories.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer font-semibold ${
                activeIndex === index
                  ? "text-[#00C7BE]"
                  : "text-[#595959] hover:text-[#00C7BE]"
              }`}
            >
              <a
                href={item.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(item.category, index);
                }}
                className="transition-colors text-foreground  duration-200"
              >
                {item.category}
              </a>
            </li>
          ))
        ) : (
          <p>No categories available.</p>
        )}
      </ul>
    </div>
  );
};

export default Category;
