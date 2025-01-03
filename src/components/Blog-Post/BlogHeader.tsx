"use client";
import React from "react";
import Image from "next/image";

interface BlogHeaderProps {
  title: string;
  authorAvatar: string;
  authorName: string;
  date: string;
  read: string;
}

export function BlogHeader({
  title,
  authorAvatar,
  authorName,
  date,
  read,
}: BlogHeaderProps) {
  return (
    <div className="w-full  grid place-content-center">
      <div className="">
        <p className="text-[#00C7BE] text-xs font-bold">ALL POST</p>
        <h1 className="text-4xl font-bold">{title}</h1>
      </div>
      <div className="flex gap-5 m-5">
        <div className="flex gap-2">
          <Image
            src={authorAvatar}
            alt={authorName}
            width={100}
            height={100}
            className="w-6 h-6 border border-black rounded-full"
          />
          <p className="text-sm font-semibold text-[#595959]">{authorName}</p>
        </div>
        <p className="text-sm font-semibold text-[#595959]">{date}</p>
        <p className="text-sm font-semibold text-[#595959]">{read}</p>
      </div>
    </div>
  );
}
