import { Builder } from "@builder.io/react";
import Hero from "../Hero/Hero";

const Featured = ({
  title,
  description,
  children,
}: {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="bg-[rgb(241,241,243)] p-10">
      {/* Hero Section */}
      <Hero
        title={title || "Insights and updates"}
        description={description || "Stay Informed with our latest articles"}
      />
      {/* Child Components */}
      {/* <div className="flex gap-10 justify-center items-center">
        {children}
      </div> */}
    </div>
  );
};

// Register the Featured component as a Builder component
Builder.registerComponent(Featured, {
  name: "Featured",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Insights and updates",
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Stay Informed with our latest articles",
    },
  ],
  // Allow children components to be added dynamically
  canHaveChildren: true,
});

export default Featured;
