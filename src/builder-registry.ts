"use client";
import { builder, Builder } from "@builder.io/react";
import BlogContainer from "./components/BlogContainer/BlogContainer";
import BlogList from "./components/Blog-Post/BlogList";
import EmailSubmition from "./components/Blog-Post/EmailSubmition";
import FAQ from "./components/FAQ/FAQ";
import Featured from "./components/Featured/Featured";
import Heading from "./components/Blog-Post/Heading";
import Hero from "./components/Hero/Hero";
import Paragraph from "./components/Blog-Post/Paragraph";
import RelatedPosts from "./components/Blog-Post/RelatedPosts";
import Social from "./components/Blog-Post/Social";
import Testimony from "./components/Testimony/Testimony";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "subtitle",
      type: "string",
      defaultValue: "BLOG",
      helperText: "Enter the subtitle text.",
    },
    {
      name: "title",
      type: "string",
      required: true,
      helperText: "Enter the title.",
    },
    {
      name: "description",
      type: "string",
      helperText: "Enter the description text.",
    },
    // Container Class Name (with options)
    {
      name: "containerClassName",
      type: "string",
      enum: ["text-left my-10 mx-5", "text-center py-10 px-5"],
      defaultValue: "text-left my-10 mx-5",
      options: [
        { value: "text-left my-10 mx-5", label: "Left Aligned, Margin" },
        { value: "text-center py-10 px-5", label: "Center Aligned, Padding" },
      ],
      helperText: "Select the style for the container.",
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
// Builder.registerComponent(Image, {
//   name: "BlogImage",
//   inputs: [
//     {
//       name: "altText",
//       type: "string",
//     },
//     {
//       name: "imageFile",
//       type: "object",
//       hideFromUI: true,
//       meta: {
//         ts: "File",
//       },
//       required: true,
//     },
//   ],
// });

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
      type: "richText",
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
      name: "referencedArticle",
      type: "list",
      required: true,
      subFields: [
        {
          name: "article",
          type: "reference",
          model: "blog",
          required: true,
        },
        {
          name: "heading",
          type: "string",
        },
      ],
    },
  ],
});

Builder.registerComponent(Social, {
  name: "Social",
  inputs: [
    { name: "link", type: "url", defaultValue: "http://" },
    { name: "x", type: "url", defaultValue: "http://" },
    { name: "linkedin", type: "url", defaultValue: "http://" },
    { name: "facebook", type: "url", defaultValue: "http://" },
  ],
});

Builder.registerComponent(Featured, {
  name: "Featured",
  inputs: [
    {
      name: "bgColor",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "refList",
      type: "list",
      subFields: [
        {
          name: "refs",
          type: "reference"
        },
      ],
      helperText: "Pass the references to the blogs.",
    },
    {
      name: "subtitle",
      type: "string",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});
