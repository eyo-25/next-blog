import { getPostData } from "@/service/posts";
import Image from "next/image";
import ReactMarkdown from 'react-markdown';

type Props = {
    params: {
        slug: string;
    }
}

export default async function PostPage({params: {slug}}: Props){
    const post = await getPostData(slug);
    return (
        <>
            <section className="overflow-hidden rounded-t-2xl w-full h-80 mt-5">
                <Image
                    className='bg-center bg-gray-600'
                    src={`https://images.unsplash.com${post.path}`}
                    alt={post.title}
                    width={1232}
                    height={320}
                />
            </section>
            <section className='flex flex-col p-5 bg-zinc-100'>
                <time className="self-end">{post.date.toString()}</time>
                <h2 className="font-extrabold text-3xl mb-2">{post.title}</h2>
                <p className="font-bold text-lg mb-5">{post.desc}</p>
                <ReactMarkdown>
                    {post.content}
                </ReactMarkdown>
            </section>
        </>
    )
}