"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { builder } from "@builder.io/react";
import { RenderBuilderContent } from "@/components/builder";

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

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [content, setContent] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    const fetchSlug = async () => {
      try {
        const resolvedParams = await params;
        setSlug(resolvedParams.slug);
      } catch (err) {
        setError("Failed to resolve parameters.");
      }
    };

    fetchSlug();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blogs?apiKey=2f632f128c9249388f79d2da77ae0417`
        );
        const data = await response.json();

        const foundBlog = data.results.find(
          (item: any) => item.data.slug === slug
        );
        if (foundBlog) {
          setBlog(foundBlog);

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
              urlPath: `/${slug}`,
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
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog not found.</div>;
  }

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
              width={100}
              height={100}
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

      <div className="w-full h-full">
        <RenderBuilderContent content={content} model="blogs" />
      </div>
    </div>
  );
}
