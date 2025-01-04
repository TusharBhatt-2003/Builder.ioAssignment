"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

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

interface BlogContextProps {
  blog: Blog | null;
  loading: boolean;
  error: string | null;
  setSlug: (slug: string) => void;
}

const BlogContext = createContext<BlogContextProps | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);

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
          (item: any) => item.data.slug === slug,
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

  console.log(blog);

  return (
    <BlogContext.Provider value={{ blog, loading, error, setSlug }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
