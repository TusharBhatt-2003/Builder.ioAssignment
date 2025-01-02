"use client";
import React, { useState } from "react";
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
  feature: boolean;
  value: {
    value: {
      data: BlogData;
    };
  };
}

interface RelatedPostsProps {
  reference: BlogData[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ reference }) => {
  if (!reference || reference.length === 0) {
    return <div>No references available.</div>;
  }

  return (
    <div className="grid  justify-center items-center px-5">
      <h1 className="text-4xl py-5 font-bold">Related Posts</h1>
      <div className="w-full flex flex-col justify-center items-center gap-5">
        {reference.map((ref, index) => (
          <BlogComp
            className="bg-[#F1F1F3] p-5"
            key={index}
            image={""}
            title={ref.value.value.data.title}
            description={ref.value.value.data.desc}
            author={{
              name: ref.value.value.data.authorname,
              image: ref.value.value.data.authoravatar,
            }}
            tag={ref.value.value.data.tag}
            time={ref.value.value.data.read}
            slug={ref.value.value.data.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
