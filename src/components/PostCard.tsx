import { Post } from "@/service/posts";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
    data: Post;
}

export default function PostCard({ data }: PostCardProps){
    return (
        <article className="rounded-md overflow-hidden shadow-lg">
            <Image
                className="h-52"
                src={`https://images.unsplash.com${data.image}`}
                alt={data.title}
                width={400}
                height={400}
            />
            <div className="flex flex-col items-center text-center p-4">
                <time className="self-end text-zinc-400 mb-2">{data.date.toString()}</time>
                <h4 className="text-lg font-bold">{data.title}</h4>
                <p className="w-full truncate text-center">{data.desc}</p>
                <ul className="flex gap-3 justify-center">
                    {data.categories.map((categorie, idx)=>(
                        <li className="rounded-md px-2 py-1 bg-zinc-700 text-white mt-3" key={idx}>{categorie}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}