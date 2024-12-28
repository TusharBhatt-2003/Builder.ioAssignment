import { useState, useEffect } from "react";
import BlogComp from "../BlogComp/BlogComp";
import Pagination from "../Pagination/Pagination ";

// TypeScript interface for the blog data
interface BlogData {
  title: string;
  description: string;
  authorName: string;
  authorAvatar: string;
  image: string;
  tag: string;
  time: string;
}

interface Blog {
  id: string;
  data: BlogData;
}

const BlogContainer = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // New state for loading
  const [error, setError] = useState<string | null>(null); // New state for error

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true); // Start loading
      setError(null); // Clear previous errors
      try {
        const response = await fetch(
          `https://cdn.builder.io/api/v2/content/blog?apiKey=2f632f128c9249388f79d2da77ae0417&page=${currentPage}&limit=9` // Fetch 9 blogs per page
        );
        const data = await response.json();
        setBlogs(data.results);

        // Check if totalCount exists in the response
        const totalCount = data.totalCount || data.results.length; // Fallback to length if totalCount is missing
        setTotalPages(Math.ceil(totalCount / 9)); // Adjust based on actual total count (9 blogs per page)
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blogs, please try again later.");
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="md:p-20">
      {loading && <div className="text-center">Loading...</div>}{" "}
      {/* Loading state */}
      {error && <div className="text-center text-red-500">{error}</div>}{" "}
      {/* Error state */}
      {/* Blog List */}
      <div className="mx-5 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {blogs.length === 0 ? (
          <div className="col-span-full text-center">No blogs available.</div> // Empty state
        ) : (
          blogs.map((blog) => (
            <BlogComp
              key={blog.id}
              image={blog.data.image}
              title={blog.data.title}
              description={blog.data.description}
              author={{
                name: blog.data.authorName,
                image: blog.data.authorAvatar,
              }}
              tag={blog.data.tag}
              time={blog.data.time}
              slug={blog.id} // Passing the unique slug from Builder.io
            />
          ))
        )}
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange} // Pass the handlePageChange function
      />
    </div>
  );
};

export default BlogContainer;
