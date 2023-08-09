import PostBoard from "@/app/home/components/PostBoard";
import CarouselBoard from "@/app/home/components/CarouselBoard";
import Profile from "@/components/Profile";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <Profile />
      <PostBoard />
      <CarouselBoard />
    </div>
  );
}
