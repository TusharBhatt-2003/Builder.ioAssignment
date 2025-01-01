"use client";
import React, { useState } from "react"; // Import useState for state management

import FeaturedBlogComp from "./FeaturedBlogComp";

// Define the BlogData type
interface BlogData {
  title: string;
  desc: string;
  authorname: string;
  authoravatar: string;
  blogcardimage: string;
  tag: string[];
  read: string;
  category: string;
  casestudy: boolean;
  slug: string;
  feature: boolean;
  value: {
    value: {
      data: BlogData;
    };
  };
}

interface FeaturedProps {
  reference: BlogData[];
}

const Featured: React.FC<FeaturedProps> = ({ reference }) => {
  const [showAll, setShowAll] = useState(false); // State to manage "view all" toggle

  if (!reference || reference.length === 0) {
    return <div>No references available.</div>;
  }

  // Determine how many items to display based on the showAll state
  const blogsToDisplay = showAll ? reference : reference.slice(0, 3);

  return (
    <div className="grid bg-[#F1F1F3] place-content-center">
      <div className="w-full py-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* Map over the blogs to display and render FeaturedBlogComp */}
        {blogsToDisplay.map((ref, index) => (
          <FeaturedBlogComp
            key={index}
            imageSrc={ref.value.value.data.blogcardimage}
            category={ref.value.value.data.category}
            time={ref.value.value.data.read}
            title={ref.value.value.data.title}
            description={ref.value.value.data.desc}
            slug={ref.value.value.data.slug}
            link={`/blogs/${ref.value.value.data.slug}`}
          />
        ))}
      </div>

      {/* Show "View All" button only if there are more than 3 items */}
      {reference.length > 3 && (
        <div className="text-center m-8">
          <button
            onClick={() => setShowAll(!showAll)} // Toggle showAll state on button click
            className="px-4 py-2 border-2 capitalize rounded-lg border-[#00C7BE] text-[#00C7BE]"
          >
            {showAll ? "View Less" : "View All"} {/* Toggle button text */}
          </button>
        </div>
      )}
    </div>
  );
};

export default Featured;
