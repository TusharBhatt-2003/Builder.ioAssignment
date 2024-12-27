import Image from "next/image";

export default function NewsLetter() {
  return (
    <div className="text-white w-full py-2 bg-[#212433] flex gap-2 items-center justify-center text-xs">
      <p> Subscribe to our Newsletter For New & latest Blogs and Resources</p>
      <Image alt="redirect" src="arrowIcon.svg" width="10" height="10" />
    </div>
  );
}
