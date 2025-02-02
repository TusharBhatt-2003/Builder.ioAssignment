import React, { useState } from "react";
import FeaturedBlogComp from "./FeaturedBlogComp";

interface BlogData {
  refs: {
    value:
      | {
          data: {
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
          };
        }[]
      | null;
  };
}

interface FeaturedProps {
  refList: BlogData[];
  subtitle?: string;
  title?: string;
  description?: string;
  bgColor?: string;
}

const Featured: React.FC<FeaturedProps> = ({
  refList,
  subtitle,
  title,
  description,
  bgColor,
}) => {
  const [showAll, setShowAll] = useState(false);

  if (!refList || refList.length === 0) {
    return <div>No references available.</div>;
  }

  const blogsToDisplay = showAll ? refList : refList.slice(0, 3);

  return (
    <div
      className="grid justify-center items-center px-5"
      style={{ backgroundColor: bgColor || "transparent" }}
    >
      <div className="text-center my-10 mx-5">
        <div className="container space-y-5">
          {subtitle && (
            <p className="text-center text-sm text-[#00C7BE] font-bold">
              {subtitle}
            </p>
          )}
          <h1 className="text-4xl font-bold">{title}</h1>
          {description && (
            <p className="text-sm text-[#595959]">{description}</p>
          )}
        </div>
      </div>

      <div className="w-full container py-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* Map over the blogs to display and render FeaturedBlogComp */}
        {blogsToDisplay.map((ref, index) => {
          // Using optional chaining and nullish coalescing to handle missing data
          const featuredData = ref.refs?.value?.data ?? null;

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
      {refList.length > 3 && (
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
