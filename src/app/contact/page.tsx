import EmailForm from "@/components/EmailForm";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { SiTistory } from "react-icons/si";

const LINKS = [
  {
    icon: <AiFillGithub className="w-10 h-10" />,
    url: "https://github.com/eyo-25",
  },
  {
    icon: <SiTistory className="w-8 h-8" />,
    url: "https://eyodevlog.tistory.com",
  },
];

export default function ContactPage() {
  return (
    <article className="mb-20">
      <section className="flex flex-col items-center my-10">
        <h3 className="mb-2 text-4xl font-bold">Contact Me</h3>
        <p>qutuzm@naver.com</p>
        <div className="flex items-center justify-center gap-5 my-5">
          {LINKS.map(({ icon, url }, index) => (
            <a key={index} href={url} target="_blank" rel="norefer">
              {icon}
            </a>
          ))}
        </div>
        <h5 className="text-2xl font-bold">Or Send me an email</h5>
      </section>
      <section>
        <EmailForm />
      </section>
    </article>
  );
}
