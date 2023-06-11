"use client"

import { Post } from "@/service/posts";
import PostsGrids from "../../../components/PostsGrids";
import { useEffect, useState } from "react";
import Categories from "./Categories";

type Props = {
    posts: Post[];
    categories: string[];
}

const ALL_POSTS = "All Posts"

export default function CategoryBoard({posts, categories} : Props){
    const [selected, setSelected] = useState(ALL_POSTS)
    const filteredPosts = selected === ALL_POSTS ? posts : posts.filter(({categories})=>categories.includes(selected))

    return (
        <div className="flex my-10 gap-10">
            <section>
                <PostsGrids posts={filteredPosts}/>
            </section>
            <Categories
                categories={categories}
                selected={selected}
                onClick={selected => setSelected(selected)}
            />
        </div>
    )
}