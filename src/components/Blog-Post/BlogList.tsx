"use client";

import React from "react";

interface BlogListProps {
  item1?: string;
  item2?: string;
  item3?: string;
}

const BlogList: React.FC<BlogListProps> = ({ item1, item2, item3 }) => {
  const items = [item1, item2, item3].filter(Boolean);
  return (
    <div className="space-y-2 mx-10 my-5 pl-10 py-5 rounded-lg bg-[#F1F1F3]">
      <ul className="list-disc">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
