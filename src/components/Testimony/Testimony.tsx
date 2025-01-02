"use client";

import React from "react";

interface TestimonyProps {
  message?: string;
  authorName?: string;
}

const Testimony: React.FC<TestimonyProps> = ({
  message = "Default testimony message.",
  authorName = "Default Author",
}) => {
  return (
    <div className="testimony-container flex flex-col justify-center items-center space-y-4 p-6 border-y">
      <div className="h-auto w-[75%] flex items-center justify-center">
        {/* Message Text */}
        <p className="text-sm w-full text-black leading-relaxed break-words text-left">
          {message}
        </p>
      </div>
      {/* Author's Name */}
      <p className="text-xs text-black font-medium text-center">{authorName}</p>
    </div>
  );
};

export default Testimony;
