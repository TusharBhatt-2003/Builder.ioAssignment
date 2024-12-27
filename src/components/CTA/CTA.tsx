import Image from "next/image";
import React from "react";

export default function CTA() {
  return (
    <div
      className="w-full h-[60vh] bg-cover bg-center flex justify-center items-center my-5 "
      style={{ backgroundImage: `url('footerUp.jpeg')` }}
    >
      <div className="w-[80%] h-[80%] bg-white rounded-lg flex gap-12 flex-col justify-center items-center">
        <div className="w-[70%] space-y-5">
          <h1 className="font-bold text-3xl">
            Schedule Your Consultation Today
          </h1>
          <p className="text-xs text-[#595959]">
            Weframe tech is the modern, award-winning platform that empowers
            some of the largest names in healthcare and advisory sectors.
          </p>
        </div>
        <div>
          <div className="flex gap-5">
            <div className="border-2 border-[#b2b2b2] p-2 rounded-lg gap-3 flex ">
              <Image
                src="mail.svg"
                alt="enter your email"
                width="25"
                height="25"
              />
              <input
                placeholder="Enter your email"
                className="placeholder:text-sm placeholder:text-[#B3B3B3]"
              />
            </div>
            <button className="bg-[#00C7BE] border-2 border-[#00C7BE] text-white px-4 py-3 rounded-lg capitalize  ">
              Book a meeting
            </button>
          </div>
          <p className="text-xs text-[#B3B3B3]">
            By submitting you agree to our privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}
