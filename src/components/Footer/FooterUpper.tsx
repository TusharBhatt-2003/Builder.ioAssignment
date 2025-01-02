"use client";

import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";

// Initialize Builder.io
builder.init("2f632f128c9249388f79d2da77ae0417");

interface FooterSection {
  title: string;
  ref?: {
    id: string;
    value?: {
      data?: {
        slug?: string;
      };
    };
  };
  list?: {
    label: string;
    ref?: {
      id: string;
      value?: {
        data?: {
          slug?: string;
        };
      };
    };
  }[];
}

const FooterUpper: React.FC = () => {
  const [footerNavData, setFooterNavData] = useState<FooterSection[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    builder
      .get("footer-nav")
      .promise()
      .then(({ data }) => {
        setFooterNavData(data.footerlist || []);
      })
      .catch((err) => {
        console.error("Error fetching footer items:", err);
        setError("Failed to load footer navigation items.");
      });
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-2 lg:flex justify-between items-center max-w-5xl mx-auto p-10">
      {footerNavData.length > 0 ? (
        footerNavData.map((item, index) => (
          <div key={index} className="items-center">
            <h1 className="text-xl mt-5 font-bold">{item.title}</h1>
            {item.list && (
              <ul className="list-none flex flex-col">
                {item.list.map((subItem, subIndex) => (
                  <li key={subIndex} className="inline-block">
                    <a
                      href={
                        subItem.ref?.value?.data?.slug
                          ? `/blog/${subItem.ref.value.data.slug}`
                          : "#"
                      }
                      className="text-sm text-[#B3B3B3] font-semibold hover:text-gray-900"
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))
      ) : (
        <div className="text-gray-500">
          No footer navigation items available.
        </div>
      )}
    </div>
  );
};

export default FooterUpper;
