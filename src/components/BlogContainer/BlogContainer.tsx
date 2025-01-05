import { useState, useEffect } from "react";
import BlogComp from "./BlogComp";
import Search from "../Search/Search"; // Import the Search component
import Category from "../Category/Category"; // Assuming Category component is imported
import { builder } from "@builder.io/sdk";
import Pagination from "../Pagination/Pagination ";

// Initialize Builder.io with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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
  const [blogs, setBlogs] = useState<Blog[]>([]); // Store all blogs
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]); // Filtered blogs
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state
  const [categories, setCategories] = useState<
    { category: string; link: string }[]
  >([]); // Categories
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Selected category

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9; // Number of blogs per page

  // Fetch blogs and categories from Builder.io
  useEffect(() => {
    const fetchBlogsAndCategories = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch blogs
        const fetchedBlogs = (await builder.getAll("blogs", {
          options: { enrich: true },
        })) as Blog[];
        setBlogs(fetchedBlogs);
        setFilteredBlogs(fetchedBlogs);

        // Extract unique categories from blogs
        const uniqueCategories = [
          ...new Set(fetchedBlogs.map((blog) => blog.data.category)),
        ].map((category) => ({
          category,
          link: `#${category.toLowerCase().replace(/\s+/g, "-")}`,
        }));
        setCategories(uniqueCategories);
      } catch (err) {
        setError(
          "Failed to fetch blogs or categories. Please try again later.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogsAndCategories();
  }, []);

  // Filter blogs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredBlogs(blogs); // Show all blogs if no query
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = blogs.filter(
        (blog) =>
          blog.data.title.toLowerCase().includes(lowerCaseQuery) ||
          blog.data.authorname.toLowerCase().includes(lowerCaseQuery) ||
          blog.data.tag.some((tag) =>
            tag.toLowerCase().includes(lowerCaseQuery),
          ) ||
          blog.data.category.toLowerCase().includes(lowerCaseQuery),
      );
      setFilteredBlogs(filtered);
    }
  }, [searchQuery, blogs]);

  // Filter blogs based on selected category
  useEffect(() => {
    if (selectedCategory) {
      const filtered = blogs.filter(
        (blog) =>
          blog.data.category.toLowerCase() === selectedCategory.toLowerCase(),
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
    <div className="grid md:container place-content-center">
      <div className="flex w-full items-center justify-center md:justify-between py-10">
        <Category
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        <Search setSearchQuery={setSearchQuery} />
      </div>

      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* Blog List */}
      <div className="justify-center m-10 items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {filteredBlogs.length === 0 ? (
          <div className="col-span-full text-center">No blogs available.</div>
        ) : (
          paginateBlogs(filteredBlogs, currentPage).map((blog) => (
            <BlogComp
              className="min-h-[400px] bg-background text-foreground max-w-[320px]"
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
