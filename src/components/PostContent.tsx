import { PostData } from "@/service/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import { AiTwotoneCalendar } from "react-icons/ai";

function PostContent({ post }: { post: PostData }) {
  const { title, desc, content, date } = post;

  return (
    <article className="flex flex-col p-5 bg-zinc-100">
      <div className="flex items-center self-end text-sky-500">
        <AiTwotoneCalendar className="mr-1" />
        <time>{date.toString()}</time>
      </div>
      <h2 className="mb-2 text-3xl font-extrabold">{title}</h2>
      <p className="mb-5 text-lg font-bold">{desc}</p>
      <div className="mb-8 border-2 w-44 border-sky-600"></div>
      <MarkdownViewer content={content} />
    </article>
  );
}

export default PostContent;
