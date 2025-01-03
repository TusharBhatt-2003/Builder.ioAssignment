"use client";
import React, { useState } from "react";
import FeaturedBlogComp from "./FeaturedBlogComp";

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
  const [showAll, setShowAll] = useState(false);

  if (!reference || reference.length === 0) {
    return <div>No references available.</div>;
  }

  const blogsToDisplay = showAll ? reference : reference.slice(0, 3);

  return (
    <div className="grid bg-background text-foreground  bg-[#F1F1F3] justify-center items-center px-5">
      <div className="w-full container py-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* Map over the blogs to display and render FeaturedBlogComp */}
        {blogsToDisplay.map((ref, index) => {
          const featuredData = ref.value?.value?.data;

          // Handle cases where data is not available
          if (!featuredData) {
            return (
              <div key={index} className="bg-[#F1F1F3] p-5">
                <p className="text-gray-500">Invalid featuredData</p>
              </div>
            );
          }
          return (
            <FeaturedBlogComp
              key={index}
              imageSrc={featuredData.blogcardimage}
              category={featuredData.category}
              time={featuredData.read}
              title={featuredData.title}
              description={featuredData.desc}
              slug={featuredData.slug}
              link={`/blogs/${featuredData.slug}`}
            />
          );
        })}
      </div>

      {/* Show "View All" button only if there are more than 3 items */}
      {reference.length > 3 && (
        <div className="text-center m-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 border-2 capitalize rounded-lg border-[#00C7BE] text-[#00C7BE]"
          >
            {showAll ? "View Less" : "View All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Featured;
