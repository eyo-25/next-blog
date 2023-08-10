import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 w-full h-16 bg-white">
      <div className="flex items-center justify-between w-full h-full px-6 mx-auto max-w-7xl">
        <Link href="/">
          <h1 className="text-3xl font-extrabold">Eyo Devlog</h1>
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
  );
}
