"use client";

import React, { useEffect, useState, useMemo } from "react";
import { builder } from "@builder.io/sdk";
import { FaChevronDown } from "react-icons/fa";

interface ResourceItem {
  label: string;
}

const ResourcesDropdown: React.FC = () => {
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    builder
      .get("resources")
      .promise()
      .then(({ data }) => {
        setResources(data.list || []);
      });
  }, []);

  const renderedResources = useMemo(() => {
    return resources.length > 0 ? (
      resources.map((item, index) => (
        <li key={index} className="p-1 cursor-pointer hover:bg-gray-200">
          {item.label}
        </li>
      ))
    ) : (
      <li>Loading...</li>
    );
  }, [resources]);

  return (
    <div className="text-sm relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center"
        aria-expanded={isOpen}
      >
        <span className="mr-2">Resources</span>
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute mt-2 border p-2 rounded bg-white shadow-lg z-10 rounded-lg">
          {renderedResources}
        </ul>
      )}
    </div>
  );
};

export default ResourcesDropdown;
