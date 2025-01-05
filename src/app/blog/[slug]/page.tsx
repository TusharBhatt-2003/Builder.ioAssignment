import React from "react";
import { builder, BuilderContent } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import { BlogHeader } from "@/components/Blog-Post/BlogHeader";

// Initialize Builder.io with your API key
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

type BlogData = {
  title: string;
  authorname: string;
  authoravatar: string;
  date: string;
  read: string;
  slug: string;
};

type BlogContent = BuilderContent & {
  data: BlogData;
};

export default async function BlogsPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Fetch all blogs from Builder.io
  const blogs = (await builder.getAll("blogs", {
    options: { enrich: true },
  })) as BlogContent[];

  // Find the blog with the matching slug
  const currentBlog = blogs.find((blog) => blog.data?.slug === slug);

  // Handle the case where no blog matches the slug
  if (!currentBlog) {
    return <div>404: Blog not found</div>;
  }

  // console.log("Matching Blog:", currentBlog);

  return (
    <div className="p-5 py-20 w-full">
      {/* Blog Header */}
      <BlogHeader
        title={currentBlog.data.title}
        authorAvatar={currentBlog.data.authoravatar}
        authorName={currentBlog.data.authorname}
        date={currentBlog.data.date}
        read={currentBlog.data.read}
      />
      <div className="w-full container h-full">
        {/* Blog Body */}
        <RenderBuilderContent content={currentBlog} model="blogs" />
      </div>
    </div>
  );
}
