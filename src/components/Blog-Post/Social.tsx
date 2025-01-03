"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Social = ({
  authorname,
  authoravatar,
  date,
  category,
  link,
  x,
  linkedin,
  facebook,
}: {
  authorname: string;
  authoravatar: string;
  date: string;
  category: string;
  link?: string;
  x?: string;
  linkedin?: string;
  facebook?: string;
}) => {
  const twitterImage = "/X-link.png";
  const linkedinImage = "/linked-in.png";
  const facebookImage = "/facebook.png";
  const profileImage = "/post-info_link.png";

  return (
    <div className="flex w-full lg:flex-row flex-col items-center gap-5 lg:py-10 pt-10 lg:px-10  justify-between">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Image
            alt={authorname}
            src={authoravatar}
            width="100"
            height="100"
            className="border border-black rounded-full w-10 h-10"
          />
          <p>{authorname}</p>
        </div>
        <p>{date}</p>
        <p className="text-[#00C7BE] font-semibold">{category}</p>
      </div>
      <div className="flex gap-3">
        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              height="40"
              width="40"
              src={profileImage}
              alt="Profile Link"
            />
          </motion.a>
        )}
        {x && (
          <motion.a
            href={x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              height="40"
              width="40"
              src={twitterImage}
              alt="Twitter Link"
            />
          </motion.a>
        )}
        {linkedin && (
          <motion.a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              height="40"
              width="40"
              src={linkedinImage}
              alt="LinkedIn Link"
            />
          </motion.a>
        )}
        {facebook && (
          <motion.a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-500"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              height="40"
              width="40"
              src={facebookImage}
              alt="Facebook Link"
            />
          </motion.a>
        )}
      </div>
    </div>
  );
};

export default Social;
