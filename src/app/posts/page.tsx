export default function PostsPage(){
    const categories = ["All Posts", "location", "traditional", "food"]

    return (
        <div>
            <ul>
                {categories.map(category => <li key={category}>{category}</li>)}
            </ul>
        </div>
    )
}