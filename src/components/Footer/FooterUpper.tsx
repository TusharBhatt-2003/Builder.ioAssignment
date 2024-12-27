import React from "react";

export default function FooterUpper() {
  const footerUpperLinks = [
    {
      title: "about",
      links: ["compony overview", "careers", "press & media", "testimonials"],
    },
    {
      title: "Resources",
      links: ["blog", "help center", "webinar & events", "case studies"],
    },
    {
      title: "Support & Contact",
      links: ["Contact Us", "Technical Support", "Feedback", "Community Forum"],
    },
  ];
  return (
    <div className="flex justify-between items-center max-w-5xl mx-auto mt-6 mb-20 pb-10">
      {footerUpperLinks.map(({ title, links }) => (
        <div key={title} className="items-center">
          <h1 className="text-xl font-bold">{title}</h1>
          <ul className="list-none flex flex-col">
            {links.map((link, index) => (
              <li key={index} className="inline-block">
                <a
                  href="#"
                  className="text-sm text-[#B3B3B3] font-semibold hover:text-gray-900"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
