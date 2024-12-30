"use client";

import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import { FaChevronDown } from "react-icons/fa"; // Icon for dropdown (using react-icons)

builder.init("2f632f128c9249388f79d2da77ae0417");

const ResourcesDropdown = () => {
  const [resources, setResources] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // To toggle the dropdown visibility

  useEffect(() => {
    builder
      .get("resources")
      .promise()
      .then(({ data }) => {
        // Set the fetched data to state
        setResources(data.list || []);
      });
  }, []);

  return (
    <div className="text-sm">
      {/* Display label and icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center">
        <span className="mr-2">Resources</span> {/* Label for the dropdown */}
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Conditionally render dropdown options */}
      {isOpen && (
        <ul className="absolute mt-2 border p-2 rounded bg-white shadow-lg rounded-lg ">
          {resources.length > 0 ? (
            resources.map((item, index) => (
              <li key={index} className="p-1 cursor-pointer hover:bg-gray-200">
                {item.label}
              </li>
            ))
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default ResourcesDropdown;
