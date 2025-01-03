"use client";

import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import { FaChevronDown } from "react-icons/fa";

builder.init("2f632f128c9249388f79d2da77ae0417");

interface NavItem {
  label: string;
  reference?: {
    id: string;
    value?: {
      data?: {
        slug?: string;
      };
    };
  };
  subList?: {
    label: string;
    reference?: {
      id: string;
      value?: {
        data?: {
          slug?: string;
        };
      };
    };
  }[];
}

const NavList: React.FC = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );

  useEffect(() => {
    builder
      .get("nav-list")
      .promise()
      .then(({ data }) => {
        setNavItems(data.list || []);
      })
      .catch((err) => {
        console.error("Error fetching nav items:", err);
        setError("Failed to load navigation items.");
      });
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <nav className="flex text-sm items-center space-x-4">
      <ul className="grid grid-cols-3 md:flex gap-5">
        {navItems.length > 0 ? (
          navItems.map((item, index) => (
            <li key={index} className="relative">
              {/* Main Navigation Item */}
              <div className="flex items-center">
                {item.reference?.value?.data?.slug ? (
                  <a
                    href={`/blog/${item.reference.value.data.slug}`}
                    className="hover:underline cursor-pointer"
                    aria-label={`Navigate to ${item.label || "Page"}`}
                  >
                    {item.label || "Untitled"}
                  </a>
                ) : (
                  <span>{item.label || "Untitled"}</span>
                )}

                {/* Dropdown Icon */}
                {item.subList?.length ? (
                  <button
                    onClick={() => toggleDropdown(index)}
                    className="ml-2"
                    aria-expanded={openDropdownIndex === index}
                  >
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        openDropdownIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : null}
              </div>

              {/* Render Dropdown if `subList` exists */}
              {item.subList?.length && openDropdownIndex === index ? (
                <ul className="absolute bg-background text-foreground  min-w-max mt-2 shadow w-fit p-2 rounded  z-10">
                  {item.subList.map((subItem, idx) => (
                    <li key={idx} className="cursor-pointe  py-1">
                      {subItem.reference?.value?.data?.slug ? (
                        <a
                          href={`/blog/${subItem.reference.value.data.slug}`}
                          className="hover:underline p-2 cursor-pointer"
                          aria-label={`Navigate to ${subItem.label || "Page"}`}
                        >
                          {subItem.label || "Untitled"}
                        </a>
                      ) : (
                        <span>{subItem.label || "Untitled"}</span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </nav>
  );
};

export default NavList;
