import { Builder } from "@builder.io/react";
import React from "react";

type FeaturedBlogCompProp = {
  imageSrc: string; // Image source URL
  category: string; // Category label (e.g., "News")
  time: string; // Time label (e.g., "5 mins")
  title: string; // Title of the card
  description: string; // Description of the card
  link: string; // Link for the "Read more" button
};

const FeaturedBlogComp: React.FC<FeaturedBlogCompProp> = ({
  imageSrc,
  category,
  time,
  title,
  description,
  link,
}) => {
  return (
    <div className="max-w-sm md:w-[25vw]  h-96 bg-[white] rounded-lg overflow-hidden">
      {/* Image */}
      <div className="h-48 ">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover rounded-lg w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-4 h-full flex flex-col">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            {/* Category */}
            <span className="px-2 py-1 text-xs font-semibold text-white bg-teal-500 rounded">
              {category}
            </span>
            {/* Time */}
            <span className="text-sm text-black">{time}</span>
          </div>

          {/* Title */}
          <h2 className="text-sm font-bold text-black mb-2">{title}</h2>

          {/* Description */}
          <p className="text-xs text-gray-600 mb-4">{description}</p>
        </div>
        {/* Read More Link */}
        <a
          href={link}
          className="text-teal-500 text-sm font-semibold flex items-center hover:underline"
        >
          Read more <span className="ml-1">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

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

export default FeaturedBlogComp;
