import React, { ReactNode } from "react";

interface BlogWrapperProps {
  children?: ReactNode[]; // Accepting children dynamically from Builder
  gap?: string; // Customizable gap between child components
}

const BlogWrapper: React.FC<BlogWrapperProps> = ({ children, gap = "4" }) => {
  return (
    <div className={`blog-wrapper w-full p-4 flex flex-wrap gap-${gap}`}>
      {children}
    </div>
  );
};

export default BlogWrapper;
