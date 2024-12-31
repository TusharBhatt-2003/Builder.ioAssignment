"use client";

import React, { useEffect, useState, useMemo } from "react";
import { builder } from "@builder.io/sdk";
import { FaChevronDown } from "react-icons/fa"; // Icon for dropdown (using react-icons)

// Initialize Builder.io with your API key
builder.init("2f632f128c9249388f79d2da77ae0417");

// Define the structure of each resource item
interface ResourceItem {
  label: string;
}

const ResourcesDropdown: React.FC = () => {
  const [resources, setResources] = useState<ResourceItem[]>([]); // Type the state to be an array of ResourceItem
  const [isOpen, setIsOpen] = useState<boolean>(false); // Type the state to be a boolean

  useEffect(() => {
    builder
      .get("resources")
      .promise()
      .then(({ data }) => {
        // Set the fetched data to state
        setResources(data.list || []);
      });
  }, []);

  // Memoize the rendered resources to prevent unnecessary re-renders
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
      {/* Display label and icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center"
        aria-expanded={isOpen} // Add aria-expanded for accessibility
      >
        <span className="mr-2">Resources</span> {/* Label for the dropdown */}
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Conditionally render dropdown options */}
      {isOpen && (
        <ul className="absolute mt-2 border p-2 rounded bg-white shadow-lg z-10 rounded-lg">
          {renderedResources}
        </ul>
      )}
    </div>
  );
};

export default ResourcesDropdown;
