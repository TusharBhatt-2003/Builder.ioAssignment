"use client";

import React, { useState } from "react";
import { Builder } from "@builder.io/react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[]; // Items can be passed from Builder.io
}

const FAQ: React.FC<FAQProps> = ({ items = defaultFAQs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="faq-container border border-[#eeeeee] p-4 rounded-lg shadow space-y-4">
      {items.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{item.question}</h3>
            <button
              onClick={() => toggleAnswer(index)}
              className="focus:outline-none"
            >
              <img
                src={openIndex === index ? "/minus.svg" : "/plus.svg"}
                alt={openIndex === index ? "Collapse" : "Expand"}
                className="w-6 h-6"
              />
            </button>
          </div>
          {openIndex === index && (
            <p className="text-[#B3B3B3] text-xs mt-4">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

// Default FAQ items
const defaultFAQs: FAQItem[] = [
  {
    question: "What is Builder.io?",
    answer: "Builder.io is a drag-and-drop page builder for modern web apps.",
  },
];

export default FAQ;
