import AdjeacentPostCard from "@/components/AdjeacentPostCard";
import PostContent from "@/components/PostContent";
import { getFeaturedPosts, getPostData } from "@/service/posts";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { title, desc } = await getPostData(slug);
  return {
    title,
    description: desc,
  };
}

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path, prev, next } = post;

  return (
    <section className="mb-5 overflow-hidden rounded-2xl">
      <article className="w-full overflow-hidden max-h-80 ">
        <Image
          className="bg-gray-600 bg-center"
          src={`https://images.unsplash.com${path}`}
          alt={title}
          width={1250}
          height={80}
        />
      </article>
      <PostContent post={post} />
      <article className="flex shadow-md">
        {prev && <AdjeacentPostCard post={prev} type={"PREV"} />}
        {next && <AdjeacentPostCard post={next} type={"NEXT"} />}
      </article>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();

  return posts.map((post) => ({ slug: post.id }));
}
