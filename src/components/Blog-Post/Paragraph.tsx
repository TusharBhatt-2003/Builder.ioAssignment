"use client";

import React from "react";

interface ParagraphProps {
  text: string;
  fontSize?: string;
  color?: string;
  lineHeight?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  fontSize = "16px",
  color = "black",
  lineHeight = "1.5",
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
