import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import Category from "@/components/Category/Category";

import Search from "@/components/Search/Search";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      <div className="flex justify-between items-center max-w-5xl mx-auto mt-6">
        <Category />
        <Search />
      </div>
      {/* <Featured /> */}
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
