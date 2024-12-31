import React, { useState, useEffect } from "react";
import FeaturedBlogComp from "../Featured/FeaturedBlogComp";

type BlogData = {
  title: string;
  desc: string;
  authorname: string;
  authoravatar: string;
  blogcardimage: string;
  tag: string[];
  read: string;
  category: string;
  casestudy: boolean;
  slug: string;
  feature: boolean;
};

interface Blog {
  data: BlogData;
  id: string;
}

const CaseStudy: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blogs?apiKey=2f632f128c9249388f79d2da77ae0417&limit=50`
        );
        const data = await response.json();
        setBlogs(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blogs, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (blogs.length === 0) {
    return <div className="text-center">No blogs available.</div>;
  }

  const filteredBlogs = blogs.filter((blog) => blog.data.casestudy);
  const blogsToDisplay = showAll ? filteredBlogs : filteredBlogs.slice(0, 3);

  return (
    <div className="py-10 grid place-content-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {blogsToDisplay.map((blog) => (
          <FeaturedBlogComp
            key={blog.id}
            imageSrc={blog.data.blogcardimage}
            category={blog.data.category}
            time={blog.data.read}
            title={blog.data.title}
            description={blog.data.desc}
            slug={blog.data.slug}
            link={`/blogs/${blog.data.slug}`}
          />
        ))}
      </div>
      {filteredBlogs.length > 3 && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 border-2 capitalize rounded-lg border-[#00C7BE] text-[#00C7BE]"
          >
            {showAll ? "view Less" : "view all"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
