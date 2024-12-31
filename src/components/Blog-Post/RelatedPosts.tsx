import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk"; // Assuming you're using Builder.io
import BlogComp from "../BlogComp/BlogComp";

export default function RelatedPosts({ reference }) {
  useEffect(() => {
    // Fetch the section data based on the reference passed
    const fetchSectionData = async () => {
      const result = await builder
        .get("blogs", { query: { reference: reference } }) // Adjust if your model name is different
        .promise();

      // Assuming that the section data will contain the blog posts or relevant information
      if (result?.results?.length > 0) {
        const sectionData = result.results[0].data; // Adjust based on how data is nested in your section
        setData(sectionData); // Set the section data
      }
    };

    fetchSectionData();
  }, [reference]); // Re-fetch when reference changes

  return (
    <div>
      <BlogComp
        image={data.blogcardimage}
        title={post.title}
        description={post.desc}
        author={{
          name: post.authorname,
          image: post.authoravatar,
        }}
        tag={post.tag}
        time={post.read}
        slug={post.slug}
        casestudy={post.casestudy}
      />
    </div>
  );
}
