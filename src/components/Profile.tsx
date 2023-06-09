import Image from "next/image";
import Link from "next/link";

export default function Profile(){
    return (
        <section className="mb-20 flex flex-col items-center text-center pt-20">
            <Image priority className="rounded-full" src={"/images/profile1.jpg"} alt="프로필" width={300} height={200}/>
            <div>
                <h3 className="mt-6 text-3xl font-bold">{"Hi I`m Eyo"}</h3>
                <h5 className="mt-2 text-xl font-medium">Frontend Engineer</h5>
                <p className="mt-2 text-zinc-400">Born to be designer, <br/> Become a developer</p>
            </div>
            <Link href={"/contact"}>
                <button className="mt-6 px-6 py-4 bg-black text-white">
                    Contact Me
                </button>
            </Link>
        </section>
    )
}