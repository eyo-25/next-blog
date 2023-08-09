export type BannerData = {
  message: string;
  state: "SUCCESS" | "ERROR";
};

type Props = {
  banner: BannerData;
};

export default function Banner({ banner: { message, state } }: Props) {
  const isSuccess = state === "SUCCESS";
  const icon = isSuccess ? "✅" : "❌";
  return (
    <p
      className={`w-full mb-5 p-2 ${isSuccess ? "bg-green-300" : "bg-red-300"}`}
    >{`${icon} ${message}`}</p>
  );
}
