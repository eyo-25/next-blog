import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Props = {
  post: Post;
  type: "PREV" | "NEXT";
};

const IconClass =
  "m-4 text-4xl text-yellow-300 transition-all group-hover:text-5xl";

function AdjeacentPostCard({ post, type }: Props) {
  const { title, id, path, desc } = post;

  return (
    <Link href={`/posts/${id}`} className="relative w-full bg-black max-h-56">
      <Image
        className="w-full opacity-40"
        src={`https://images.unsplash.com${path}`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="absolute top-0 left-0 flex items-center justify-around w-full h-full px-8 text-white group">
        {type === "PREV" && <FaArrowLeft className={IconClass} />}
        <div className="w-full text-center">
          <h3 className="mb-2 text-3xl font-bold">{title}</h3>
          <p>{desc}</p>
        </div>
        {type === "NEXT" && <FaArrowRight className={IconClass} />}
      </div>
    </Link>
  );
}

export default AdjeacentPostCard;
