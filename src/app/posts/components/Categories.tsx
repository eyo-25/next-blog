type Props = {
    categories: string[];
    selected: string;
    onClick: (categories: string) => void;
}

export default function Categories({categories, selected, onClick}: Props){
    return (
        <section className="text-center">
            <h3 className="font-bold mb-5">Category</h3>
            <ul>
                {categories.map(category => (
                    <li
                        className={` hover:text-red-600 hover:cursor-pointer ${
                            selected === category && "font-bold text-red-600"
                        }`}
                        key={category}
                        onClick={()=>onClick(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </section>
    )
}