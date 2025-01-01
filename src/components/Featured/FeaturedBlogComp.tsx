import { Builder } from "@builder.io/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type FeaturedBlogCompProp = {
  imageSrc: string; // Image source URL
  category: string; // Category label (e.g., "News")
  time: string; // Time label (e.g., "5 mins")
  title: string; // Title of the card
  description: string; // Description of the card
  link: string; // Link for the "Read more" button
  slug: string;
};

const FeaturedBlogComp: React.FC<FeaturedBlogCompProp> = ({
  imageSrc,
  category,
  time,
  title,
  description,
  slug,
}) => {
  return (
    <div className="max-w-sm h-full md:w-[25vw] flex flex-col justify-between  bg-white rounded-lg overflow-hidden">
      {/* Image */}
      <div>
        <div className="h-48">
          <Image
            width="100"
            height="100"
            src={imageSrc}
            alt={title}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
        <div className="p-4 h-full flex flex-col">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 py-1 text-xs font-semibold text-white bg-teal-500 rounded">
                {category}
              </span>
              <span className="text-sm font-semibold text-black">{time}</span>
            </div>
            <h2 className="text-sm font-bold text-black mb-2">{title}</h2>
            <p className="text-xs text-gray-600 mb-4">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex pb-5 pl-5 gap-2">
        <Link
          href={`/blog/${slug}`}
          className="text-teal-500 text-sm underline font-semibold flex items-center hover:underline"
        >
          Read more
        </Link>
        <Image alt="redirect" src="/arrowIcon.svg" width="10" height="10" />
      </div>
    </div>
  );
};

export default FeaturedBlogComp;
