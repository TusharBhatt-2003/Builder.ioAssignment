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
  fontWeight?: "normal" | "bold" | "lighter" | "bolder" | number; // Font weight
}

const Heading: React.FC<HeadingProps> = ({
  text,
  size = "xl",
  alignment = "left",
  fontWeight = "normal",
}) => {
  return (
    <div
      style={{
        textAlign: alignment,
        fontWeight,
      }}
      className={`text-${size} mx-10 my-5 bg-background text-foreground`} // Dynamically apply Tailwind size
    >
      {text}
    </div>
  );
};

export default Heading;
