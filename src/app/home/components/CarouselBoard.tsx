import { getNotFeaturedPosts } from "@/service/posts";
import MultiCarousel from "./MultiCarousel";
import PostCard from "../../../components/PostCard";

export default async function CarouselBoard(){
    const notFeaturedPosts = await getNotFeaturedPosts();
    return (
        <section className="mb-20 my-4">
            <h3 className="font-bold text-2xl mb-4">Recommand Posts</h3>
            <MultiCarousel>
                {notFeaturedPosts.map((post)=>(
                    <PostCard key={post.id} data={post}/>
                ))}
            </MultiCarousel>    
        </section>
    )
}