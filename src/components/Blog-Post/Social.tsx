"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";

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
  category: string;
  slug: string;
}

interface Blog {
  id: string;
  data: BlogData;
}

const Social = ({
  link,
  x,
  linkedin,
  facebook,
}: {
  link?: string;
  x?: string;
  linkedin?: string;
  facebook?: string;
}) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const twitterImage = "/X-link.png";
  const linkedinImage = "/linked-in.png";
  const facebookImage = "/facebook.png";
  const profileImage = "/post-info_link.png";

  const params = useParams();
  const slug = params.slug;

  useEffect(() => {
    if (!slug) return;

    const fetchBlogData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blogs?apiKey=2f632f128c9249388f79d2da77ae0417`,
        );
        const data = await response.json();

        const foundBlog = data.results.find(
          (item: { data: { slug: string } }) => item.data.slug === slug,
        );

        if (foundBlog) {
          setBlog(foundBlog);
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

    fetchBlogData();
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
    <div className="flex w-full lg:flex-row flex-col items-center gap-5 lg:py-10 pt-10 lg:px-10 justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Image
            alt={blog.data.authorname}
            src={blog.data.authoravatar}
            width={40}
            height={40}
            className="h-10 w-10 border border-black rounded-full"
          />
          <p>{blog.data.authorname}</p>
        </div>
        <p>{blog?.data.date}</p>
        <p className="text-[#00C7BE] font-semibold">{blog?.data.category}</p>
      </div>
      {/* social media */}
      <div className="flex gap-3">
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              width={35}
              height={35}
              className="w-auto h-auto"
              src={profileImage}
              alt="Profile Link"
            />
          </motion.a>
        )}

        {x && (
          <motion.a
            href={x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              width={35}
              height={35}
              className="w-auto h-auto"
              src={twitterImage}
              alt="Twitter Link"
            />
          </motion.a>
        )}
        {linkedin && (
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              width={35}
              height={35}
              className="w-auto h-auto"
              src={linkedinImage}
              alt="LinkedIn Link"
            />
          </motion.a>
        )}
        {facebook && (
          <motion.a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              width={35}
              height={35}
              className="w-auto h-auto"
              src={facebookImage}
              alt="Facebook Link"
            />
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default Social;
