"use client";

import React, { useEffect, useState } from "react";
import { builder } from "@builder.io/sdk";
import Image from "next/image";

builder.init("2f632f128c9249388f79d2da77ae0417");

export default function NewsLetter() {
  const [announcement, setAnnouncement] = useState("");
  const [reference, setReference] = useState(null);

  useEffect(() => {
    builder
      .get("anouncement")
      .promise()
      .then(({ data }) => {
        setAnnouncement(data.announcement || "Default Announcement");
        setReference(data.reference || null); // Store reference data
      });
  }, []);

  return (
    <div className="text-white w-full py-2 bg-[#212433] flex gap-2 items-center justify-center text-xs">
      {reference && (
        <a
          href={`/page/${reference.id}`} // Assuming you want to link to the page using the `id`
          className="hover:underline ml-2"
        >
          <p>{announcement}</p>
        </a>
      )}
      <Image alt="redirect" src="/arrowIcon.svg" width="10" height="10" />
    </div>
  );
}
