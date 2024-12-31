import { useEffect } from "react";

interface RelatedPostsProps {
  reference: { slug: string };
}

export default function RelatedPosts({ reference }: RelatedPostsProps) {
  useEffect(() => {
    const fetchSectionData = async () => {
      const response = await fetch(
        `https://cdn.builder.io/api/v2/content/blogs?apiKey=2f632f128c9249388f79d2da77ae0417${reference.slug}`
      );
      const data = await response.json();
    };

    fetchSectionData();
  }, [reference]);

  return <div>Related posts content</div>;
}
