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
  const answerRefs = useRef<Map<number, HTMLParagraphElement | null>>(
    new Map(),
  );

  const toggleAnswer = (index: number) => {
    const answer = answerRefs.current.get(index);
    if (openIndex === index && answer) {
      // Collapse the currently open answer
      gsap.to(answer, {
        height: 0,
        opacity: 0,
        duration: 0.2,
        ease: "power1.inOut",
        onComplete: () => setOpenIndex(null),
      });
    } else {
      setOpenIndex(index);
    }
  };

  useEffect(() => {
    if (openIndex !== null) {
      const answer = answerRefs.current.get(openIndex);
      if (answer) {
        gsap.fromTo(
          answer,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.2, ease: "power1.out" },
        );
      }
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
          <div style={{ overflow: "hidden" }}>
            <p
              ref={(el) => {
                if (el) answerRefs.current.set(index, el);
              }}
              style={{
                height: openIndex === index ? "auto" : "0",
                opacity: openIndex === index ? "1" : "0",
                transition: "opacity 0.2s ease, height 0.2s ease",
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

const defaultFAQs: FAQItem[] = [
  {
    question: "What is Builder.io?",
    answer: "Builder.io is a drag-and-drop page builder for modern web apps.",
  },
];

export default FAQ;
