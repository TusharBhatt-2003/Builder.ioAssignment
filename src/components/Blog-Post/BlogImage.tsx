"use client";

import React from "react";
import Image from "next/image";

interface ImageProps {
  imageFile: string | null; // File input for the image, can be null
  altText?: string; // Alternative text for the image
}

const BlogImage: React.FC<ImageProps> = ({
  imageFile,
  altText = "Image", // Default alt text
}) => {
  return (
    <div className="relative bg-contain w-full h-full">
      {imageFile ? (
        <Image
          width="100"
          height="100"
          src={imageFile} // Generate a URL for the file
          alt={altText}
          style={{}}
          className="w-full h-[40vh] lg:h-[65vh] md:h-[50vh] rounded-xl"
        />
      ) : (
        <div className="text-gray-400 text-center py-4">No image selected</div>
      )}
    </div>
  );
};

export default BlogImage;
