import { useState, useEffect } from "react";
import BlogComp from "./BlogComp";
import Search from "../Search/Search"; // Import the Search component
import Category from "../Category/Category"; // Assuming Category component is imported
import Pagination from "../Pagination/Pagination ";

interface BlogData {
  title: string;
  desc: string;
  authorname: string;
  authoravatar: string;
  blogcardimage: string;
  tag: string[];
  read: string;
  slug: string;
  category: string;
}

interface Blog {
  data: BlogData;
  id: string;
}

const BlogContainer = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // State for all blogs
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]); // State to store filtered blogs
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<
    { category: string; link: string }[]
  >([]); // State for categories
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // State for selected category

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Set the number of blogs to display per page

  // Fetch blogs data
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
        setFilteredBlogs(data.results); // Set the fetched blogs as filtered initially

        // Extract unique categories from blogs
        const categoriesSet = new Set<string>(
          data.results.map((blog: Blog) => blog.data.category)
        );
        const categoriesArray = Array.from(categoriesSet).map((category) => ({
          category,
          link: `/category/${category.toLowerCase().replace(/\s+/g, "-")}`,
        }));
        setCategories(categoriesArray);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load blogs, please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Filter blogs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBlogs(blogs); // If no search query, show all blogs
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = blogs.filter(
        (blog) =>
          blog.data.title.toLowerCase().includes(lowerCaseQuery) ||
          blog.data.authorname.toLowerCase().includes(lowerCaseQuery) ||
          blog.data.tag.some((tag) =>
            tag.toLowerCase().includes(lowerCaseQuery)
          ) ||
          blog.data.category.toLowerCase().includes(lowerCaseQuery)
      );
      setFilteredBlogs(filtered);
    }
  }, [searchQuery, blogs]);

  // Filter blogs based on selected category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = blogs.filter(
        (blog) =>
          blog.data.category.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredBlogs(filtered);
    } else {
      setFilteredBlogs(blogs); // Show all blogs if no category is selected
    }
  }, [selectedCategory, blogs]);

  // Logic to paginate the filtered blogs
  const paginateBlogs = (blogs: Blog[], currentPage: number) => {
    const startIndex = (currentPage - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="grid place-content-center">
      <div className="flex w-full items-center justify-center md:justify-between md:mx-10">
        <Category
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <Search setSearchQuery={setSearchQuery} />

        {loading && <div className="text-center">Loading...</div>}
        {error && <div className="text-center text-red-500">{error}</div>}
      </div>

      {/* Blog List */}
      <div className="mx-5 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {filteredBlogs.length === 0 ? (
          <div className="col-span-full text-center">No blogs available.</div>
        ) : (
          paginateBlogs(filteredBlogs, currentPage).map((blog) => (
            <BlogComp
              key={blog.id}
              image={blog.data.blogcardimage}
              title={blog.data.title}
              description={blog.data.desc}
              author={{
                name: blog.data.authorname,
                image: blog.data.authoravatar,
              }}
              tag={blog.data.tag}
              time={blog.data.read}
              slug={blog.data.slug}
            />
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default BlogContainer;
