import Image from "next/image";
import NewsLetter from "./NewsLetter";

function Header() {
  return (
    <>
      <NewsLetter />
      <header className="bg-white w-full border-b border-zinc-500">
        <div className="flex py-4 px-5 justify-between items-center">
          <div>
            <Image src="logo.svg" alt="logo" width="85" height="85" />
          </div>
          <nav className="flex text-sm items-center space-x-4 ">
            <p>AI Consulting</p>
            <p>AI Toolbox</p>
            <p>Content Health</p>
            <p>Resources</p>
          </nav>
          <div className="flex items-center space-x-2 ">
            <button className="border-2 border-[#00C7BE] text-[#00C7BE] px-4 py-3 rounded-lg capitalize ">
              login
            </button>
            <button className="bg-[#00C7BE] border-2 border-[#00C7BE] text-white px-4 py-3 rounded-lg capitalize  ">
              register now
            </button>
            <button className="border-2 p-2 rounded-lg border-black">
              <Image
                src="dark_mode.svg"
                alt="lightDark mode"
                width="20"
                height="20"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
