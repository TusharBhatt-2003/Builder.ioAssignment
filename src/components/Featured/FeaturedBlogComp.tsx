import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type FeaturedBlogCompProp = {
  imageSrc: string;
  category: string;
  time: string;
  title: string;
  description: string;
  link: string;
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
    <motion.div
    whileHover={{ scale: 1.1 }}
    className="max-w-sm w-full bg-background text-foreground h-full md:w-[25vw] flex flex-col justify-between  bg-white rounded-lg overflow-hidden">
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
              <span className="px-2 py-1 text-xs font-semibold  text-white bg-teal-500 rounded">
                {category}
              </span>
              <span className="text-sm bg-background text-foreground font-semibold text-black">{time}</span>
            </div>
            <h2 className="text-sm bg-background text-foreground font-bold text-black mb-2">{title}</h2>
            <p className="text-xs bg-background text-foreground text-gray-600 mb-4">{description}</p>
          </div>
        </div>
      </div>
      <motion.div
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.9 }} 
         className="flex pb-5 pl-5 gap-2">
        <Link
          href={`/blog/${slug}`}
          className="text-teal-500 text-sm underline font-semibold flex items-center hover:underline"
        >
          Read more
        </Link>
        <Image alt="redirect" src="/arrowIcon.svg" width="10" height="10" />
      </motion.div>
    </motion.div>
  );
};

export default FeaturedBlogComp;
