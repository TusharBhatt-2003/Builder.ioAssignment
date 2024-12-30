"use client";
import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";

builder.init("2f632f128c9249388f79d2da77ae0417");

const NavList = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    builder
      .get("nav-list")
      .promise()
      .then(({ data }) => {
        // Set the fetched data to state
        setNavItems(data.list || []);
      });
  }, []);

  return (
    <nav className="flex text-sm items-center space-x-4 ">
      <ul className="flex gap-5">
        {navItems.length > 0 ? (
          navItems.map((item, index) => (
            <li key={index}>
              {item.reference ? (
                // If there's a reference, you can link to the referenced page (you may need to fetch the page details or use a URL)
                <a href={`/page/${item.reference.id}`}>{item.label}</a>
              ) : (
                <span>{item.label}</span> // If there's no reference, display the label as plain text
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
