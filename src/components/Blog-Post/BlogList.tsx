interface BlogListProps {
  items?: string; // Accepting a rich text as a string
}

function BlogList({ items }: BlogListProps) {
  return (
    <div className="bg-[#F1F1F3] dark:bg-[#1f1f1f] text-foreground rounded-lg p-5">
      <div
        className="prose prose-lg dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: items ?? "" }}
      />
    </div>
  );
}

export default BlogList;
