import Image from "next/image";
import React from "react";

export default function CTA() {
  return (
    <div
      className="w-full bg-cover bg-center flex justify-center items-center my-5 "
      style={{ backgroundImage: `url('/footerUp.jpeg')` }}
    >
      <div className="bg-white m-10 p-5 md:p-10 rounded-lg flex gap-5 md:gap-12 flex-col justify-center items-center">
        <div className="w-[85%] md:w-[70%] space-y-5">
          <h1 className="font-bold text-xl md:text-3xl">
            Schedule Your Consultation Today
          </h1>
          <p className="text-xs text-[#595959]">
            Weframe tech is the modern, award-winning platform that empowers
            some of the largest names in healthcare and advisory sectors.
          </p>
        </div>
        <div>
          <div className="flex md:flex-row flex-col gap-2 md:gap-5">
            <div className="border-2 sm:w-fit mg:w-full border-[#b2b2b2] p-2 rounded-lg gap-3 flex ">
              <Image
                src="/mail.svg"
                alt="enter your email"
                width="25"
                height="25"
              />
              <input
                placeholder="Enter your email"
                className="placeholder:text-sm 0 w-fit md:w-full placeholder:text-[#B3B3B3]"
              />
            </div>
            <button className="bg-[#00C7BE] md:w-fit w-full border-2 border-[#00C7BE] text-white p-2 lg:px-4 lg:py-3 rounded-lg capitalize ">
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
