"use client";

import { useInput } from "@/hooks/useInput";
import { FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";

const InputClass = "border-[1.5px] rounded px-16pxr h-45pxr";
const InputBoxClass = "flex flex-col w-full mb-3";

function EmailForm() {
  const [{ email, subject, message }, onInputChange, resetInput] = useInput({
    email: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, subject, message });
    setBanner({ message: "success", state: "SUCCESS" });
    setTimeout(() => setBanner(null), 3000);
  };

  return (
    <div className="mx-auto flex flex-col w-[350px] justify-center items-center">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col items-center w-full gap-2 p-6 mx-auto text-white bg-gray-800 rounded-xl"
      >
        <div className={InputBoxClass}>
          <label htmlFor="email">Your Email</label>
          <input
            onChange={onInputChange}
            value={email}
            className={InputClass}
            type="email"
            id="email"
          />
        </div>
        <div className={InputBoxClass}>
          <label htmlFor="subject">Subject</label>
          <input
            onChange={onInputChange}
            value={subject}
            className={InputClass}
            type="text"
            id="subject"
          />
        </div>
        <div className={InputBoxClass}>
          <label htmlFor="message">Message</label>
          <textarea
            rows={10}
            onChange={onInputChange}
            value={message}
            className={InputClass}
            id="message"
          />
        </div>
        <button
          className="w-full h-8 font-bold bg-yellow-300 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default EmailForm;
