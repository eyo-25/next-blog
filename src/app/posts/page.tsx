"use client"

import PostsGrids from "@/components/PostsGrids"
import { useState } from "react"

export default function PostsPage(){
    const categories = ["All Posts", "location", "traditional", "food"]
    const [selected, setSelected] = useState();

    return (
        <div>
            {/* <PostsGrids posts={}/> */}
            <ul>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ul>
        </div>
    )
}