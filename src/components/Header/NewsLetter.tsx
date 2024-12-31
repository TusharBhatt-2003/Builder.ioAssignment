"use client";

import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import Image from "next/image";

builder.init("2f632f128c9249388f79d2da77ae0417");

interface Reference {
  id: string;
  url?: string; // Assuming the reference might include a URL field.
}

const NewsLetter: React.FC = () => {
  const [announcement, setAnnouncement] = useState<string>(
    "Default Announcement"
  );
  const [reference, setReference] = useState<Reference | null>(null);

  useEffect(() => {
    builder
      .get("anouncement")
      .promise()
      .then(({ data }) => {
        setAnnouncement(data.announcement || "Default Announcement");
        setReference(data.reference || null); // Store reference data
      })
      .catch((err) => {
        console.error("Error fetching announcement data:", err);
      });
  }, []);

  return (
    <div className="text-white w-full py-2 bg-[#212433] flex gap-2 items-center justify-center text-xs">
      {reference ? (
        <a
          href={reference.url || `/page/${reference.id}`} // Use `url` if available, fallback to `id`
          className="hover:underline ml-2"
          aria-label={`Navigate to announcement: ${announcement}`}
        >
          <p>{announcement}</p>
        </a>
      ) : (
        <p>{announcement}</p> // Show announcement as plain text if no reference
      )}
      <Image alt="redirect" src="/arrowIcon.svg" width={10} height={10} />
    </div>
  );
};

export default NewsLetter;
