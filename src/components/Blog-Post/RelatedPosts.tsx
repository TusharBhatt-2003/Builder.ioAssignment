import React from "react";
import BlogComp from "../BlogContainer/BlogComp";

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
}

interface BlogsData {
  heading: string;
  refs: {
    value: {
      data: BlogData;
    } | null;
  } | null;
}

interface RelatedPostsProps {
  refList: BlogsData[] | null;
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ refList }) => {
  if (!refList || refList.length === 0) {
    return <div>No references available.</div>;
  }

  console.log("References:", refList);

  return (
    <div className="grid justify-center items-center px-5">
      <h1 className="text-4xl py-5 bg-background text-foreground font-bold">
        Related Posts
      </h1>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        {refList.map((ref, index) => {
          // Check if ref.refs is valid and ref.refs.value is available
          const refData = ref.refs?.value?.data;

          // Fallback for missing data
          const refHeading = ref.heading || "No title available";

          if (!refData) {
            // If no valid data, show a fallback message
            return (
              <div key={index} className="bg-[#F1F1F3] p-5">
                <p>{refHeading}</p>
                <p className="text-gray-500">Invalid ref data</p>
              </div>
            );
          }

          return (
            <BlogComp
              className="bg-[#F1F1F3] bg-background w-full rounded-lg px-3"
              key={index}
              image={""} // Default to empty string if no image
              title={refData.title || "Untitled"}
              description={refData.desc || "No description available"}
              author={{
                name: refData.authorname || "Anonymous",
                image: refData.authoravatar || "",
              }}
              tag={refData.tag || []}
              time={refData.read || "N/A"}
              slug={refData.slug || "#"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
