import Link from "next/link";

export default function Header(){
    return (
        <header className="bg-white fixed top-0 w-full h-16">
            <div className="flex justify-between items-center w-full h-full max-w-7xl px-6 mx-auto">
                <Link href="/">
                    <h1 className="font-extrabold text-3xl">Eyo Devlog</h1>
                </Link>
                <nav>
                    <ul className="flex gap-5">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/posts">Posts</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}