"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items = defaultFAQs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  const toggleAnswer = (index: number) => {
    if (openIndex === index) {
      // Collapse the currently open answer
      const answer = answerRefs.current[index];
      if (answer) {
        gsap.to(answer, {
          height: 0,
          opacity: 0,
          duration: 0.2, // Faster duration
          ease: "power1.inOut", // Smoother ease
          onComplete: () => setOpenIndex(null), // Set state after animation
        });
      }
    } else {
      setOpenIndex(index); // Open the new answer
    }
  };

  useEffect(() => {
    if (openIndex !== null && answerRefs.current[openIndex]) {
      const answer = answerRefs.current[openIndex];
      // Animate opening the answer with smoother transition
      gsap.fromTo(
        answer,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.2, ease: "power1.out" }, // Faster and smoother animation
      );
    }
  }, [openIndex]);

  return (
    <div className="faq-container container space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="faq-item border border-[#eeeeee] p-4 rounded-lg shadow"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{item.question}</h3>
            <button
              onClick={() => toggleAnswer(index)}
              className="focus:outline-none"
            >
              {/* Framer Motion Animation on the button */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                initial={{ rotate: 0 }}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  width="100"
                  height="100"
                  src={openIndex === index ? "/minus.svg" : "/plus.svg"}
                  alt={openIndex === index ? "Collapse" : "Expand"}
                  className="w-10 h-10"
                />
              </motion.div>
            </button>
          </div>
          <div
            style={{
              overflow: "hidden", // Prevent abrupt resizing
            }}
          >
            <p
              ref={(el) => (answerRefs.current[index] = el)}
              style={{
                height: openIndex === index ? "auto" : "0",
                opacity: openIndex === index ? "1" : "0",
                transition: "opacity 0.2s ease, height 0.2s ease", // Faster fallback transition
              }}
              className="text-[#B3B3B3] text-xs mt-4"
            >
              {item.answer}
            </p>
          </div>
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
