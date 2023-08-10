import CategoryBoard from "@/app/posts/components/CategoryBoard";
import { getPosts } from "@/service/posts";

export const metadata = {
  title: "Posts",
  description: "공부하고 경험한것을 정리한 포스트 페이지 입니다.",
};

export default async function PostsPage() {
  const posts = await getPosts();
  const allCategories = new Set(
    posts.reduce((acc: string[], cu) => [...acc, ...cu.categories], [])
  );
  const categories = ["All Posts", ...allCategories];

  return <CategoryBoard posts={posts} categories={categories} />;
}
