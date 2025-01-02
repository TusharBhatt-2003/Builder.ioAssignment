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
  tag: string[];
  time: string;
  slug: string;
  className?: string;
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
}: BlogCompProps) => {
  const authorImage = author?.image || "/default-author.jpg";
  const authorName = author?.name || "Unknown Author";
  const [blogId, setBlogId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blogs/${slug}?apiKey=2f632f128c9249388f79d2da77ae0417`
        );
        const data = await response.json();
        setBlogId(data.slug);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

  if (loading) return <div className="loading">Loading...</div>;

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
          {tag.map((singleTag, index) => (
            <p
              key={index}
              className="text-white bg-[#00C7BE] px-2 p-1 rounded-full"
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
