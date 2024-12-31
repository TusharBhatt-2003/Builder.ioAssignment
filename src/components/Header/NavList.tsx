"use client";
import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";

builder.init("2f632f128c9249388f79d2da77ae0417");

interface NavItem {
  label: string;
  reference?: {
    id: string; // ID field (optional)
    url?: string; // Direct URL field (if available)
  };
}

const NavList: React.FC = () => {
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [error, setError] = useState<string | null>(null);

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

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <nav className="flex text-sm items-center space-x-4">
      <ul className="flex gap-5">
        {navItems.length > 0 ? (
          navItems.map((item, index) => (
            <li key={index}>
              {item.reference?.url ? (
                <a
                  href={item.reference.url}
                  className="text-blue-600 hover:underline cursor-pointer"
                  aria-label={`Navigate to ${item.label || "Page"}`}
                >
                  {item.label || "Untitled"}
                </a>
              ) : (
                <span>{item.label || "Untitled"}</span>
              )}
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
