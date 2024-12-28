import React from "react";
import BlogComp from "../BlogComp/BlogComp";

interface Author {
  name: string;
  image: string;
}

interface BlogCompProps {
  image: string;
  title: string;
  description: string;
  author: Author;
  tag: string;
  time: string;
  slug: string;
}

interface BuilderData {
  data: {
    blogs: BlogCompProps[];
  };
}

// Fetch data from Builder.io API
export async function getStaticProps() {
  const response = await fetch(
    "https://cdn.builder.io/api/v2/content/blog?apiKey=NEXT_PUBLIC_BUILDER_API_KEY"
  ); // Replace with your API key
  const data = await response.json();

  return {
    props: {
      blogs: data.results,
    },
  };
}

const BlogPage = ({ blogs }: BuilderData) => {
  return (
    <div className="blog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog: BlogCompProps) => (
        <BlogComp
          key={blog.slug}
          image={blog.image}
          title={blog.title}
          description={blog.description}
          author={blog.author}
          tag={blog.tag}
          time={blog.time}
          slug={blog.slug}
        />
      ))}
    </div>
  );
};

export default BlogPage;
