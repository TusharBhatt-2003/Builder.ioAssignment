"use client";

import BlogComp from "@/components/BlogComp/BlogComp";
import Image from "next/image";
import { useState, useEffect } from "react";

interface BlogData {
  title: string;
  description: string;
  authorName: string;
  intro: string;
  introPara2: string;
  authorAvatar: string;
  image: string;
  tag: string;
  time: string;
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
  params: Promise<{ slug: string }>; // `params` is a Promise now
}) {
  const [slug, setSlug] = useState<string | null>(null);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]); // New state for related blogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      try {
        const unwrappedParams = await params; // Await the params Promise
        setSlug(unwrappedParams.slug);
      } catch (err) {
        console.error("Failed to unwrap params:", err);
        setError("Failed to load blog, please try again later.");
      }
    };

    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (!slug) return; // Only fetch if slug is available

    const fetchBlog = async () => {
      setLoading(true);
      setError(null); // Reset error state
      try {
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blog?apiKey=2f632f128c9249388f79d2da77ae0417`
        );
        const data = await response.json();

        // Find the specific blog by its slug
        const foundBlog = data.results.find((item: any) => item.id === slug);

        if (foundBlog) {
          setBlog(foundBlog); // Set the found blog in state
        } else {
          setError("Blog not found.");
        }

        // Fetch related blogs by filtering or selecting from the data
        const related = data.results.filter((item: any) => item.id !== slug); // Example filter
        setRelatedBlogs(related); // Set related blogs state
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blog, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
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
    <div className="p-5 py-20 w-full flex flex-col justify-center items-center">
      <div className="md:w-[50%]">
        <p className="text-[#00C7BE] text-xs font-bold">ALL POST</p>
        <h1 className="text-4xl font-bold ">{blog.data.title}</h1>
      </div>
      <div className="flex gap-5 m-5">
        <div className="flex gap-2">
          <Image
            src={blog.data.authorAvatar}
            alt={blog.data.authorName}
            width="100"
            height="100"
            className="w-6 h-6 border border-black rounded-full"
          />
          <p className="text-sm font-semibold text-[#595959]">
            {blog.data.authorName}
          </p>
        </div>
        <p className="text-sm font-semibold text-[#595959]">{blog.data.date}</p>
        <p className="text-sm font-semibold text-[#595959]">{blog.data.time}</p>
      </div>
      <div className="w-full">
        <Image
          src={blog.data.blogImg}
          alt={blog.data.title}
          width="100"
          height="100"
          className="w-full h-full lg:h-[80vh] center border-2 rounded-lg"
        />
      </div>
      <div className="lg:flex gap-5">
        <div className="text-left lg:w-[70%] py-10">
          <h1 className="text-xl font-bold">Introduction</h1>
          <p className="py-2 text-sm text-[#595959]">{blog.data.intro}</p>
          <p className="py-2 text-sm text-[#595959]">{blog.data.introPara2}</p>
        </div>
        <div className="text-left space-y-20 lg:w-[30%] py-10">
          <div>
            <h1 className="text-xl py-5 font-bold">Related Posts</h1>
            <div className="space-y-3">
              {relatedBlogs.slice(0, 3).map((relatedBlog) => (
                <BlogComp
                  className="bg-[#F1F1F3] px-5"
                  key={relatedBlog.id}
                  // image={relatedBlog.data.image}
                  title={relatedBlog.data.title}
                  description={relatedBlog.data.description}
                  author={{
                    name: relatedBlog.data.authorName,
                    image: relatedBlog.data.authorAvatar,
                  }}
                  tag={relatedBlog.data.tag}
                  time={relatedBlog.data.time}
                  slug={relatedBlog.id} // Passing the unique slug from Builder.io
                />
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <h1 className="text-xl  font-bold">
              WeframeTech News <br />
              Weekly
            </h1>
            <p className="text-sm text-[#595959]">
              Stay informed on our latest AI advancements and business insights
              by joining the Symbiofy newsletter. By subscribing, you consent to
              our Privacy Policy.
            </p>
            <div className="flex rounded-lg ">
              <input
                placeholder="Enter your email"
                className="bg-[#E4E4E7] rounded-l-lg px-5"
              />
              <button className="bg-[#00C7BE] text-white py-2 px-5 rounded-r-md">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
