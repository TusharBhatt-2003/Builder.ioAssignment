export default function FooterBottom() {
  const footerLinks = ["terms of use", "privacy policy", "security"];

  return (
    <div className="flex lg:flex-row flex-col-reverse border-t border-zinc-600 mx-5 py-10 gap-5 justify-center items-center p-2 text-[#666666] font-semibold">
      <div className="flex justify-center items-center gap-2">
        <p>©2024</p>
        <a href="https://www.weframetech.com/">@weframetech</a>
        <p>· All rights reserved.</p>
      </div>
      <ul className="flex gap-5 ">
        {footerLinks.map((footerLinks, index) => (
          <li key={index}>
            <a href={footerLinks}>{footerLinks}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
