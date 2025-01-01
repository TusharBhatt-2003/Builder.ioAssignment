"use client";
import { builder, Builder } from "@builder.io/react";
import BlogContainer from "./components/BlogContainer/BlogContainer";
import BlogImage from "./components/Blog-Post/BlogImage";
import BlogList from "./components/Blog-Post/BlogList";
import EmailSubmition from "./components/Blog-Post/EmailSubmition";
import FAQ from "./components/FAQ/FAQ";
import Heading from "./components/Blog-Post/Heading";
import Hero from "./components/Hero/Hero";
import Paragraph from "./components/Blog-Post/Paragraph";
import RelatedPosts from "./components/Blog-Post/RelatedPosts";
import Social from "./components/Blog-Post/Social";
import Testimony from "./components/Testimony/Testimony";
import Featured from "./components/Featured/Featured";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

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

Builder.registerComponent(BlogContainer, {
  name: "BlogContainer",
});

Builder.registerComponent(BlogImage, {
  name: "BlogImage",
  inputs: [
    {
      name: "altText",
      type: "string",
    },
    {
      name: "imageFile",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "File",
      },
      required: true,
    },
  ],
});

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "alignment",
      type: "string",
      enum: ["center", "left", "right"],
    },
    {
      name: "color",
      type: "string",
    },
    {
      name: "fontWeight",
      type: "string",
      enum: ["bold", "bolder", "lighter", "normal"],
    },
    {
      name: "size",
      type: "string",
      enum: ["2xl", "3xl", "4xl", "5xl", "6xl", "lg", "md", "sm", "xl", "xs"],
      required: true,
    },
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Paragraph, {
  name: "Paragraph",
  inputs: [
    {
      name: "color",
      type: "string",
    },
    {
      name: "fontSize",
      type: "string",
    },
    {
      name: "lineHeight",
      type: "string",
    },
    {
      name: "text",
      type: "string",
      required: true,
    },
  ],
});

Builder.registerComponent(Heading, {
  name: "Heading",
  inputs: [
    {
      name: "text",
      type: "string",
      defaultValue: "Your Heading Text",
      required: true,
      helperText: "Enter the text for the heading.",
    },
    {
      name: "size",
      type: "string",
      enum: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"], // Tailwind sizes
      defaultValue: "xl",
      required: true,
      helperText: "Select the size of the heading.",
      options: [
        { value: "xs", label: "Extra Small (xs)" },
        { value: "sm", label: "Small (sm)" },
        { value: "md", label: "Medium (md)" },
        { value: "lg", label: "Large (lg)" },
        { value: "xl", label: "Extra Large (xl)" },
        { value: "2xl", label: "2x Extra Large (2xl)" },
        { value: "3xl", label: "3x Extra Large (3xl)" },
        { value: "4xl", label: "4x Extra Large (4xl)" },
        { value: "5xl", label: "5x Extra Large (5xl)" },
        { value: "6xl", label: "6x Extra Large (6xl)" },
      ],
    },
    {
      name: "alignment",
      type: "string",
      enum: ["left", "center", "right"], // Alignment options
      defaultValue: "left",
      helperText: "Select the alignment for the heading.",
      options: [
        { value: "left", label: "Left" },
        { value: "center", label: "Center" },
        { value: "right", label: "Right" },
      ],
    },
    {
      name: "color",
      type: "color", // Allow color picking in Builder
      defaultValue: "#000",
      helperText: "Pick a color for the heading.",
    },
    {
      name: "fontWeight",
      type: "string",
      enum: [
        "normal",
        "bold",
        "lighter",
        "bolder",
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900",
      ],
      defaultValue: "normal",
      helperText: "Choose the font weight for the heading.",
      options: [
        { value: "normal", label: "Normal" },
        { value: "bold", label: "Bold" },
        { value: "lighter", label: "Lighter" },
        { value: "bolder", label: "Bolder" },
        { value: "100", label: "100" },
        { value: "200", label: "200" },
        { value: "300", label: "300" },
        { value: "400", label: "400" },
        { value: "500", label: "500" },
        { value: "600", label: "600" },
        { value: "700", label: "700" },
        { value: "800", label: "800" },
        { value: "900", label: "900" },
      ],
    },
  ],
});

Builder.registerComponent(Paragraph, {
  name: "Paragraph",
  inputs: [
    {
      name: "text",
      type: "string", // Text input for the paragraph
      required: true,
      helperText: "Enter the text for the paragraph.",
    },
    {
      name: "fontSize",
      type: "string",
      defaultValue: "16px", // Default font size
      helperText: "Select a font size.",
      // Predefined options for font size
      options: [
        { value: "12px", label: "12px" },
        { value: "14px", label: "14px" },
        { value: "16px", label: "16px" },
        { value: "18px", label: "18px" },
        { value: "20px", label: "20px" },
        { value: "24px", label: "24px" },
      ],
    },
    {
      name: "color",
      type: "string",
      defaultValue: "black", // Default color
      helperText: "Select the text color.",
      options: [
        { value: "black", label: "Black" },
        { value: "red", label: "Red" },
        { value: "blue", label: "Blue" },
        { value: "green", label: "Green" },
        { value: "gray", label: "Gray" },
      ],
    },
    {
      name: "lineHeight",
      type: "string",
      defaultValue: "1.5", // Default line height
      helperText: "Select the line height.",
      // Predefined options for line height
      options: [
        { value: "1.2", label: "1.2" },
        { value: "1.5", label: "1.5" },
        { value: "1.8", label: "1.8" },
        { value: "2", label: "2" },
      ],
    },
  ],
});

Builder.registerComponent(BlogList, {
  name: "BlogList",
  inputs: [
    {
      name: "items",
      type: "object",
      hideFromUI: true,
      meta: {
        ts: "string[]",
      },
      required: true,
    },
  ],
});

Builder.registerComponent(BlogImage, {
  name: "BlogImage",
  inputs: [
    {
      name: "imageFile",
      type: "file", // File picker for image
      allowedFileTypes: ["jpg", "jpeg", "png", "webp", "gif"], // Restrict file types
      required: true,
      helperText: "Upload an image file (e.g., jpg, png, webp, gif).",
    },
    {
      name: "altText",
      type: "string",
      defaultValue: "Image description",
    },
  ],
});

Builder.registerComponent(BlogList, {
  name: "BlogList",
  inputs: [
    {
      name: "item1",
      type: "string", // Input for first item
      helperText: "Enter list item 1",
    },
    {
      name: "item2",
      type: "string", // Input for second item
      helperText: "Enter list item 2",
    },
    {
      name: "item3",
      type: "string", // Input for third item
      helperText: "Enter list item 3",
    },
  ],
});

Builder.registerComponent(Social, {
  name: "Social",
  inputs: [
    {
      name: "authorname",
      type: "string",
      defaultValue: "John Doe",
      helperText: "Name of the author",
    },
    {
      name: "authoravatar",
      type: "file", // Change to 'file' for image uploads
      helperText: "Upload an avatar image for the author",
      defaultValue: "/default-avatar.png",
    },
    {
      name: "date",
      type: "string",
      defaultValue: "2024-12-31",
      helperText: "Date of the blog post",
    },
    {
      name: "category",
      type: "string",
      defaultValue: "Tech",
      helperText: "Blog post category",
    },
    {
      name: "link",
      type: "url",
      helperText: "Profile link URL",
    },
    {
      name: "x",
      type: "url",
      helperText: "Twitter profile URL",
    },
    {
      name: "linkedin",
      type: "url",
      helperText: "LinkedIn profile URL",
    },
    {
      name: "facebook",
      type: "url",
      helperText: "Facebook profile URL",
    },
  ],
});

Builder.registerComponent(EmailSubmition, {
  name: "EmailSubmition",
  inputs: [
    {
      name: "heading",
      type: "string",
      defaultValue: "WeframeTech News Weekly",
    },
    {
      name: "paragraph",
      type: "string",
      defaultValue:
        "Stay informed on our latest AI advancements and business insights by joining the Symbiofy newsletter. By subscribing, you consent to our Privacy Policy.",
    },
    { name: "placeholder", type: "string", defaultValue: "Enter your email" },
    { name: "buttonText", type: "string", defaultValue: "Join now" },
  ],
});

Builder.registerComponent(RelatedPosts, {
  name: "RelatedPosts",
  inputs: [
    {
      name: "reference",
      type: "reference",
      model: "blog",
      required: true,
    },
  ],
});

Builder.registerComponent(Featured, {
  name: "Featured",
  inputs: [
    {
      name: "reference",
      type: "list",
      subFields: [
        {
          name: "value",
          type: "reference",
          model: "blog",
          required: true,
        },
      ],
    },
  ],
});
