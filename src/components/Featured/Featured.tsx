"use client";
import React from "react";

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
  if (!reference || reference.length === 0) {
    return <div>No references available.</div>;
  }

  return (
    <div className="grid bg-[#F1F1F3] place-content-center">
      <div className="w-full py-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {reference.map((ref, index) => (
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
    </div>
  );
};

export default Featured;
