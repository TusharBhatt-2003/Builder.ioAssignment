"use client";
import { builder, Builder } from "@builder.io/react";
import BlogComp from "./components/BlogComp/BlogComp";
import BlogWrapper from "./components/BlogWrapper/BlogWrapper";
import Counter from "./components/Counter/Counter";
import FAQ from "./components/FAQ/FAQ";
import Featured from "./components/Featured/Featured";
import FeaturedBlogComp from "./components/Featured/FeaturedBlogComp";
import Hero from "./components/Hero/Hero";
import Pagination from "./components/Pagination/Pagination ";
import Testimony from "./components/Testimony/Testimony";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
// Register BlogWrapper with Builder.io

Builder.registerComponent(BlogWrapper, {
  name: "BlogWrapper",
  inputs: [
    {
      name: "gap",
      type: "string",
      defaultValue: "4",
      friendlyName: "Gap between children",
    },
  ],
  childRequirements: {
    message: "Drag and drop BlogComp components here!",
  },
});

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
// Register the FeaturedBlogComp component as a Builder component

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
// Register the Featured component as a Builder component

Builder.registerComponent(Featured, {
  name: "Featured",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Insights and updates",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Stay Informed with our latest articles",
    },
  ],
  // Allow children components to be added dynamically
  canHaveChildren: true,
});

Builder.registerComponent(FAQ, {
  name: "FAQ",
  inputs: [
    {
      name: "items",
      type: "list",
      subFields: [
        { name: "question", type: "text", required: true },
        { name: "answer", type: "text", required: true },
      ],
      defaultValue: [
        {
          question: "What is Builder.io?",
          answer:
            "Builder.io is a drag-and-drop page builder for modern web apps.",
        },
        {
          question: "How does this FAQ work?",
          answer:
            'Click on the "+" icon to reveal the answer below the question.',
        },
      ],
    },
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
