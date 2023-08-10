import { MailData } from "./nodeMailer";

export async function sendMail(mailData: MailData) {
  const res = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(mailData),
    headers: {
      "Content-Type": "aplication/json",
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "서버요청 실패");
  }
  return data;
}
