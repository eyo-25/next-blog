import path from "path";
import { promises as fs } from "fs";

export type Post = {
  id: string;
  title: string;
  desc: string;
  date: string;
  categories: string[];
  path: string;
  featured: boolean;
  textfile: string;
};

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data);
}

// &를 통해 Post애 content를 더하여 타입 생성
export type PostData = Post & {
  content: string;
  prev: Post | null;
  next: Post | null;
};

export async function getPostData(postId: string): Promise<PostData> {
  const posts = await getPosts();

  const post = posts.find((post) => post.id === postId);

  if (!post) throw new Error(`${postId}가 존재하지 않습니다`);

  const index = posts.indexOf(post);
  const prev = index > 0 ? posts[index - 1] : null;
  const next = index < posts.length - 1 ? posts[index + 1] : null;

  const filePath = path.join(
    process.cwd(),
    "data",
    "posts",
    `${post.textfile}.md`
  );
  const content = await fs.readFile(filePath, "utf-8");
  return { ...post, content, prev, next };
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.featured);
}

export async function getNotFeaturedPosts(): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => !post.featured);
}

export async function getCategoryPosts(category: string): Promise<Post[]> {
  const posts = await getPosts();
  if (category === "All Posts") {
    return posts;
  }
  return posts.filter(({ categories }) => categories.includes(category));
}
