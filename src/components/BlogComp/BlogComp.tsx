import React from "react";

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
}

const BlogComp = ({
  image,
  title,
  description,
  author,
  tag,
  time,
}: BlogCompProps) => {
  // Ensure the author image and name are available
  const authorImage = author?.image || "default-author.jpg"; // Fallback if missing
  const authorName = author?.name || "Unknown Author"; // Fallback if missing

  return (
    <div className="blog-comp  md:w-[25vw]">
      <img
        src={image}
        alt="Blog image"
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-[#595959] font-semibold mt-2">{description}</p>
      <div className="author-info mt-4 gap-2 flex items-center">
        <img
          src={authorImage}
          alt={authorName}
          className="w-8 h-8 border-2 border-black rounded-full"
        />
        <p className="font-semibold text-[#595959]">{authorName}</p>
        <p className="text-white bg-[#00C7BE] px-2 rounded-full">{tag}</p>
        <p className="text-[#595959]">{time}</p>
      </div>
    </div>
  );
};

export default BlogComp;
