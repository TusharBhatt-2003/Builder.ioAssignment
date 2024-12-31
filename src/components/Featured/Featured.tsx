import React, { useState, useEffect } from "react";
import FeaturedBlogComp from "./FeaturedBlogComp"; // Assuming FeaturedBlogComp is a custom component

type BlogData = {
  title: string;
  desc: string;
  authorname: string;
  authoravatar: string;
  blogcardimage: string;
  tag: string[];
  read: string;
  category: string;
  casestudy: boolean; // Assuming casestudy is a boolean field in the API data
  slug: string;
  feature: boolean; // Assuming feature is a boolean field in the API data
};

interface Blog {
  data: BlogData;
  id: string;
}

const Featured: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // State for all blogs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false); // State to toggle between showing 3 blogs and all blogs

  // Fetch blogs data from API
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blogs?apiKey=2f632f128c9249388f79d2da77ae0417&limit=50`
        );
        const data = await response.json();
        setBlogs(data.results); // Store all blogs in state
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blogs, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  // If no blogs are found
  if (blogs.length === 0) {
    return <div className="text-center">No blogs available.</div>;
  }

  // Filter blogs to only include those with casestudy === true
  const filteredBlogs = blogs.filter((blog) => blog.data.feature);

  // Determine blogs to display based on showAll state
  const blogsToDisplay = showAll ? filteredBlogs : filteredBlogs.slice(0, 3);

  return (
    <div className="py-10 bg-[#F1F1F3]  grid place-content-center">
      {/* Grid layout for Featured Blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {blogsToDisplay.map((blog) => (
          <FeaturedBlogComp
            key={blog.id}
            imageSrc={blog.data.blogcardimage || "default-image.jpg"}
            category={blog.data.category || "Uncategorized"}
            time={blog.data.read || "N/A"}
            title={blog.data.title || "Untitled"}
            description={blog.data.desc || "No description available"}
            slug={blog.data.slug}
            link={`/blog/${blog.data.slug}`} // Pass the link property
          />
        ))}
      </div>
      {/* See More Button */}
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

export default Featured;
