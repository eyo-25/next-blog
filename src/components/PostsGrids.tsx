import { Post } from "@/service/posts";
import PostCard from "./PostCard";

type Props = {
    posts: Post[]
}

export default function PostsGrids({posts}: Props){
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {posts.map((post)=>(
                <li key={post.id}>
                    <PostCard data={post}/>
                </li>
            ))}
        </ul>
    )
}