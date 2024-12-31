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
  tag: string[]; // Array of strings
  time: string;
  slug: string; // Unique slug for the blog (coming from Builder.io)
  className?: string; // Optional className prop
  casestudy: boolean;
}

const BlogComp = ({
  image,
  title,
  description,
  author,
  tag,
  time,
  slug,
  className,
  casestudy, // Destructure the className prop
}: BlogCompProps) => {
  const authorImage = author?.image || "/default-author.jpg";
  const authorName = author?.name || "Unknown Author";
  const [blogId, setBlogId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true); // Set loading to true when making the API call
      try {
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blogs/${slug}?apiKey=2f632f128c9249388f79d2da77ae0417`
        ); // Use the slug to fetch specific blog data
        const data = await response.json();
        setBlogId(data.slug); // Assuming API returns an object with 'id'
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched
      }
    };

    fetchBlogData();
  }, [slug]);

  if (loading) return <div className="loading">Loading...</div>; // You can customize the loading message

  return (
    <div
      className={`blog-comp capitalize rounded-lg py-4 h-full md:w-[25vw] flex flex-col justify-between ${className}`}
    >
      <div className="space-y-2">
        <Link href={`/blog/${slug}`}>
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className="w-full h-64 object-cover rounded-lg cursor-pointer"
            />
          )}
        </Link>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-[#595959] font-semibold mt-2">{description}</p>
        {blogId && <p>Blog ID: {blogId}</p>}{" "}
        {/* Show the blog ID after data is loaded */}
      </div>
      <div className="author-info mt-4 gap-2 flex items-center">
        <Image
          src={authorImage}
          alt={authorName}
          width={32}
          height={32}
          className="w-8 h-8 border border-black rounded-full"
        />
        <p className="font-semibold text-[#595959]">{authorName}</p>
        <div className="flex gap-2">
          {/* Map over the tags array and render each tag */}
          {tag.map((singleTag, index) => (
            <p
              key={index}
              className="text-white bg-[#00C7BE] px-2 rounded-full"
            >
              {singleTag}
            </p>
          ))}
        </div>
        <p className="text-[#595959]">{time}</p>
      </div>
    </div>
  );
};

export default BlogComp;
