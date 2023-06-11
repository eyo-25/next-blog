import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
    id: string,
    title: string,
    desc: string,
    date: string,
    categories: string[],
    path: string,
    featured: boolean,
    textfile: string
}

export async function getPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'data','posts.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

export type PostData = Post & { content: string }

export async function getPostData(postId:string): Promise<PostData> {
    const post = await getPosts()
        .then((posts)=> posts.find((post)=> post.id === postId));

    if(!post) throw new Error(`${postId}가 존재하지 않습니다`);

    const filePath = path.join(process.cwd(), 'data','posts', `${post.textfile}.md`);
    const content = await fs.readFile(filePath, 'utf-8');
    return {...post, content}
}

export async function getFeaturedPosts(): Promise<Post[]> {
    const posts = await getPosts();
    return posts.filter((post)=>post.featured);
}

export async function getNotFeaturedPosts(): Promise<Post[]> {
    const posts = await getPosts();
    return posts.filter((post)=>!post.featured);
}

export async function getCategoryPosts(category : string): Promise<Post[]> {
    const posts = await getPosts();
    if(category === "All Posts") {
        return posts;
    }
    return posts.filter(({categories})=>categories.includes(category));
}