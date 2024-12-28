"use client";
import { builder, Builder } from "@builder.io/react";
import BlogComp from "./components/BlogComp/BlogComp";
import BlogComponent from "./components/BlogPost/BlogPost";
import BlogContainer from "./components/BlogContainer/BlogContainer";
import Category from "./components/Category/Category";
import FAQ from "./components/FAQ/FAQ";
import FeaturedBlogComp from "./components/Featured/FeaturedBlogComp";
import Hero from "./components/Hero/Hero";
import Pagination from "./components/Pagination/Pagination ";
import Testimony from "./components/Testimony/Testimony";
import ViewAll from "./components/Button/ViewAll";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(BlogComp, {
  name: "BlogComp",
  inputs: [
    {
      name: "image",
      type: "file",
      allowedFileTypes: ["jpeg", "png"],
      defaultValue: "default-image.jpg",
    },
    { name: "title", type: "string", defaultValue: "Blog Title" },
    { name: "description", type: "string", defaultValue: "Blog description" },
    {
      name: "author",
      type: "object",
      subFields: [
        { name: "name", type: "string", defaultValue: "Author Name" },
        { name: "image", type: "file", allowedFileTypes: ["jpeg", "png"] },
      ],
    },
    { name: "tag", type: "string", defaultValue: "Tag" },
    { name: "time", type: "string", defaultValue: "5 mins" },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    { name: "subtitle", type: "text", defaultValue: "BLOG" },
    { name: "title", type: "text", required: true },
    { name: "description", type: "text" },
    {
      name: "subtitleClassName",
      type: "text",
      defaultValue: "text-center text-sm text-[#00C7BE] font-bold",
    },
    {
      name: "titleClassName",
      type: "text",
      defaultValue: "text-4xl font-bold",
    },
    {
      name: "descriptionClassName",
      type: "text",
      defaultValue: "text-sm text-[#595959]",
    },
    {
      name: "containerClassName",
      type: "text",
      defaultValue: "text-left my-10 mx-5",
    },
  ],
});

Builder.registerComponent(Pagination, {
  name: "Pagination",
  inputs: [
    {
      name: "currentPage",
      type: "number",
      required: true,
    },
    {
      name: "totalPages",
      type: "number",
      required: true,
    },
  ],
});

Builder.registerComponent(FeaturedBlogComp, {
  name: "FeaturedBlogComp",
  inputs: [
    {
      name: "imageSrc",
      type: "string",
      required: true,
      defaultValue: "https://via.placeholder.com/150",
    },
    { name: "category", type: "string", required: true, defaultValue: "News" },
    { name: "time", type: "string", required: true, defaultValue: "5 mins" },
    {
      name: "title",
      type: "string",
      required: true,
      defaultValue: "Default Title",
    },
    {
      name: "description",
      type: "string",
      required: true,
      defaultValue: "This is a description.",
    },
    { name: "link", type: "url", required: true, defaultValue: "#" },
  ],
});

Builder.registerComponent(FAQ, {
  name: "FAQ",
  inputs: [
    {
      name: "items",
      type: "list",
      subFields: [
        {
          name: "question",
          type: "string",
          defaultValue: "Sample question",
        },
        {
          name: "answer",
          type: "string",
          defaultValue: "Sample answer",
        },
      ],
    },
  ],
});

Builder.registerComponent(Testimony, {
  name: "Testimony",
  inputs: [
    {
      name: "message",
      type: "string",
      defaultValue:
        "Delightfully effective experience... delivered a principal software engineer to offer within a month.",
    },
    {
      name: "authorName",
      type: "string",
      defaultValue: "Sr. Recruiter @Google Inc.",
    },
  ],
});

Builder.registerComponent(Category, {
  name: "Category",
  inputs: [
    {
      name: "categories",
      type: "list",
      subFields: [
        {
          name: "category",
          type: "string",
          defaultValue: "New Category",
        },
        {
          name: "link",
          type: "url",
          defaultValue: "#",
        },
      ],
      defaultValue: [
        { category: "view all", link: "/view-all" },
        { category: "healthcare trends", link: "/healthcare-trends" },
        { category: "AI insights", link: "/ai-insights" },
        { category: "case studies", link: "/case-studies" },
        { category: "best practices", link: "/best-practices" },
      ],
    },
  ],
});

Builder.registerComponent(ViewAll, {
  name: "ViewAll",
});

Builder.registerComponent(BlogComponent, {
  name: "BlogComponent",
});

Builder.registerComponent(BlogContainer, {
  name: "BlogContainer",
});
