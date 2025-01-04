import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
          `https://cdn.builder.io/api/v2/content/blogs/${slug}?apiKey=2f632f128c9249388f79d2da77ae0417`,
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
    <motion.div
      whileHover={{
        scale: 0.89,
        boxShadow: "0 8px 10px rgba(0, 0, 0, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
      className={`blog-comp flex flex-col justify-between transition-all rounded-lg duration-300 ${className}`}
    >
      <div className="space-y-3 overflow-hidden rounded-lg w-full">
        <Link href={`/blog/${slug}`}>
          {image && (
            <div className="overflow-hidden rounded-lg">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="relative w-full aspect-square"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover rounded-lg"
                />
              </motion.div>
            </div>
          )}
        </Link>
        <div className="p-4">
          <h2 className="text-lg text-foreground font-bold line-clamp-2">
            {title}
          </h2>
          <p className="text-sm dark:text-gray-300 text-gray-600 line-clamp-3 mt-2">
            {description}
          </p>
        </div>
      </div>
      <div className="author-info mt-auto p-4 flex items-center gap-2">
        <Image
          src={authorImage}
          alt={authorName}
          width={32}
          height={32}
          className="w-8 h-8 border border-gray-300 rounded-full"
        />
        <p className="text-sm dark:text-white font-medium text-gray-600">
          {authorName}
        </p>
        <div className="ml-auto flex gap-2 flex-wrap">
          {tag.map((singleTag, index) => (
            <span
              key={index}
              className="text-xs text-white bg-[#00C7BE] px-2 py-1 rounded-full"
            >
              {singleTag}
            </span>
          ))}
        </div>
        <p className="text-xs dark:text-gray-300 text-gray-500">{time}</p>
      </div>
    </motion.div>
  );
};

export default BlogComp;
