import { getFeaturedPosts } from "@/service/posts";
import PostsGrids from "../../../components/PostsGrids";

export default async function PostBoard(){
    const featuredPosts = await getFeaturedPosts();

    return (
        <section className="mb-20">
            <h3 className="font-bold text-2xl mb-4">Featuered Posts</h3>
            <PostsGrids posts={featuredPosts}/>
        </section>
    )
}