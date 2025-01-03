import React from "react";
import BlogComp from "../BlogContainer/BlogComp";

interface BlogData {
  refs?: {
    value?: {
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
      }
    } | null;
  } | null;
}

interface RelatedPostsProps {
  refList?: BlogData[] | null; 
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
      <div className="flex flex-col w-full justify-center items-center gap-5">
        {refList.map((ref, index) => {
          const data = ref.refs?.value?.data;

          // Handle cases where data is not available
          if (!data) {
            return (
              <div key={index} className="bg-[#F1F1F3] p-5">
                <p className="text-gray-500">Invalid ref data</p>
              </div>
            );
          }

          return (
            <BlogComp
              className="bg-[#F1F1F3] bg-background w-full rounded-lg px-3"
              key={index}
              image={data.blogcardimage || ""}
              title={data.title || "Untitled"}
              description={data.desc || "No description available"}
              author={{
                name: data.authorname || "Anonymous",
                image: data.authoravatar || "",
              }}
              tag={data.tag || []}
              time={data.read || "N/A"}
              slug={data.slug || "#"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedPosts;
