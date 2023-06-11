import CategoryBoard from "@/app/posts/components/CategoryBoard";
import { getPosts } from "@/service/posts"

export default async function PostsPage(){
    const posts = await getPosts();
    const allCategories = new Set(posts.reduce((acc : string[], cu)=> [...acc, ...cu.categories], []))
    const categories = ["All Posts", ...allCategories]

    return (
        <CategoryBoard posts={posts} categories={categories} />
    )
}