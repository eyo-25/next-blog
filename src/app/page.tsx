import PostBoard from "@/app/home/components/PostBoard";
import Profile from "@/app/home/components/Profile"
import CarouselBoard from "@/app/home/components/CarouselBoard";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <Profile />
      <PostBoard />
      <CarouselBoard />
    </div>
  )
}
