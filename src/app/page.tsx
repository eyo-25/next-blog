import PostBoard from "@/components/PostBoard";
import Profile from "@/components/Profile"
import CarouselBoard from "@/components/CarouselBoard";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <Profile />
      <PostBoard />
      <CarouselBoard />
    </div>
  )
}
