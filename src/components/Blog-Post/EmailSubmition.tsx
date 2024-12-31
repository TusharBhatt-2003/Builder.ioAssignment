import React from "react";

interface EmailSubmitionProps {
  heading?: string;
  paragraph?: string;
  placeholder?: string;
  buttonText?: string;
}

const EmailSubmition: React.FC<EmailSubmitionProps> = ({
  heading = "Default Heading",
  paragraph = "Default paragraph text",
  placeholder = "Enter your email",
  buttonText = "Submit",
}) => {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">{heading}</h1>
      <p className="text-lg text-[#595959] font-semibold">{paragraph}</p>
      <div className="w-full rounded-lg">
        <input
          placeholder={placeholder}
          className="bg-[#E4E4E7] rounded-l-lg p-5 placeholder:text-[#595959]"
        />
        <button
          type="submit"
          className="p-5 bg-[#00C7BE] text-white font-bold rounded-r-lg"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default EmailSubmition;
