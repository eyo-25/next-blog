import { getFeaturedPosts } from "@/service/posts";
import PostCard from "./PostCard";

export default async function PostBoard(){
    const featuredPosts = await getFeaturedPosts();

    return (
        <section className="mb-20">
            <h3 className="font-bold text-2xl mb-4">Featuered Posts</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {featuredPosts.map((post)=>(
                    <li key={post.id}>
                        <PostCard data={post}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}