"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  image: string;
}

interface BlogCompProps {
  image: string;
  title: string;
  description: string;
  author: Author;
  tag: string;
  time: string;
  slug: string; // Unique slug for the blog (coming from Builder.io)
}

const BlogComp = ({
  image,
  title,
  description,
  author,
  tag,
  time,
  slug,
  className, // Destructure the className prop
}: BlogCompProps) => {
  const authorImage = author?.image || "default-author.jpg";
  const authorName = author?.name || "Unknown Author";
  const [blogId, setBlogId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Replace the URL with your API endpoint
    const fetchBlogData = async () => {
      try {
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blog?apiKey=2f632f128c9249388f79d2da77ae0417`
        ); // Fetch blog data using slug
        const data = await response.json();
        setBlogId(data.id); // Assuming API returns an object with 'id'
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  return (
    <div
      className={`blog-comp capitalize rounded-lg py-4 h-full md:w-[25vw] flex flex-col justify-between ${className}`}
    >
      <div className="space-y-2">
        <Link href={`/blog/${slug}`}>
          {image ? (
            <Image
              src={image}
              alt="Blog image"
              width="100"
              height="100"
              className="w-full h-64 object-cover rounded-lg cursor-pointer"
            />
          ) : null}
        </Link>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-[#595959] font-semibold mt-2">{description}</p>
        <p>{blogId}</p>
      </div>
      <div className="author-info mt-4 gap-2 flex items-center">
        <Image
          src={authorImage}
          alt={authorName}
          width="100"
          height="100"
          className="w-8 h-8 border border-black rounded-full"
        />
        <p className="font-semibold text-[#595959]">{authorName}</p>
        <p className="text-white bg-[#00C7BE] px-2 rounded-full">{tag}</p>
        <p className="text-[#595959]">{time}</p>
      </div>
    </div>
  );
};

export default BlogComp;
