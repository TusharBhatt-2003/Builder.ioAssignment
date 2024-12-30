"use client";

import React from "react";

interface HeadingProps {
  text: string; // The heading text
  size:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"; // Tailwind text size
  alignment?: "left" | "center" | "right"; // Text alignment
  color?: string; // Text color
  fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number; // Font weight
}

const Heading: React.FC<HeadingProps> = ({
  text,
  size = "xl",
  alignment = "left",
  color = "#000",
  fontWeight = "normal",
}) => {
  return (
    <div
      style={{
        textAlign: alignment,
        color,
        fontWeight,
      }}
      className={`text-${size} mx-10 my-5`} // Dynamically apply Tailwind size
    >
      {text}
    </div>
  );
};

export default Heading;
