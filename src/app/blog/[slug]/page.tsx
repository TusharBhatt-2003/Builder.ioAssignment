"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { builder } from "@builder.io/react"; // Import Builder SDK and React component
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface BlogData {
  title: string;
  description: string;
  authorname: string;
  intro: string;
  introPara2: string;
  authoravatar: string;
  image: string;
  tag: string;
  read: string;
  date: string;
  blogImg: string;
  body: string;
}

interface Blog {
  id: string;
  data: BlogData;
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [content, setContent] = useState(null); // State for Builder.io content
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blogs?apiKey=2f632f128c9249388f79d2da77ae0417`
        );
        const data = await response.json();

        // Find the specific blog by slug
        const foundBlog = data.results.find(
          (item: any) => item.data.slug === params.slug
        );
        if (foundBlog) {
          setBlog(foundBlog);

          // Fetch related blogs by filtering or selecting
          const related = data.results.filter(
            (item: any) => item.id !== foundBlog.id
          );
          setRelatedBlogs(related);
        } else {
          setError("Blog not found.");
        }
      } catch (err) {
        setError("Failed to load blog, please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchBuilderContent = async () => {
      try {
        const builderContent = await builder
          .get("blogs", {
            userAttributes: {
              urlPath: `/${params.slug}`,
            },
          })
          .toPromise();
        setContent(builderContent);
      } catch (err) {
        console.error("Failed to fetch Builder.io content:", err);
      }
    };

    fetchBlogData();
    fetchBuilderContent();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  // Social media data from the API response
  const socials = blog.data.socials || {}; // Assuming socials are part of the API response

  return (
    <div className="p-5 py-20 w-full">
      <div className="w-full grid place-content-center">
        <div className="">
          <p className="text-[#00C7BE] text-xs font-bold">ALL POST</p>
          <h1 className="text-4xl font-bold">{blog.data.title}</h1>
        </div>
        <div className="flex gap-5 m-5">
          <div className="flex gap-2">
            <Image
              src={blog.data.authoravatar}
              alt={blog.data.authorname}
              width="100"
              height="100"
              className="w-6 h-6 border border-black rounded-full"
            />
            <p className="text-sm font-semibold text-[#595959]">
              {blog.data.authorname}
            </p>
          </div>
          <p className="text-sm font-semibold text-[#595959]">
            {blog.data.date}
          </p>
          <p className="text-sm font-semibold text-[#595959]">
            {blog.data.read}
          </p>
        </div>
      </div>

      {/* Render Builder.io section */}
      <div className="w-full h-full">
        <RenderBuilderContent content={content} model="blogs" />
      </div>
    </div>
  );
}
