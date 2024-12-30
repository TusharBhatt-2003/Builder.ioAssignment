"use client";

import React from "react";

interface ParagraphProps {
  text: string; // The text content of the paragraph
  fontSize?: string; // Optional font size for the paragraph
  color?: string; // Optional text color
  lineHeight?: string; // Optional line height
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  fontSize = "16px", // Default font size
  color = "black", // Default text color
  lineHeight = "1.5", // Default line height
}) => {
  return (
    <p
      style={{
        fontSize,
        color,
        lineHeight,
      }}
      className="mx-10 my-5"
    >
      {text}
    </p>
  );
};

export default Paragraph;
