"use client";

interface BlogListProps {
  items?: string[]; // Accepting an array of strings for items
  listItem?: string[][]; // Accepting an array of arrays of strings for sublists, corresponding to each item
}

const BlogList = ({ items }: { items: { listItem: string }[] }) => {
  return (
    <div className="bg-[#F1F1F3] dark:bg-[#1f1f1f] text-foreground  rounded-lg p-5">
      {items && items.length > 0 ? (
        <ul className="list-disc mx-5">
          {items.map((item, index) => (
            <li className="p-1" key={index}>
              {item.listItem}
            </li>
          ))}
        </ul>
      ) : (
        <p>No blog items available.</p>
      )}
    </div>
  );
};

export default BlogList;
