import { createTransport } from "nodemailer";

export type MailData = {
  from: string;
  subject: string;
  message: string;
};

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.AUTH_USER,
    pass: process.env.AUTH_PASS,
  },
});

export async function sendEMail(data: MailData) {
  const { from, subject, message } = data;

  const mailData = {
    from,
    to: process.env.AUTH_USER,
    subject: `[BLOG] ${subject}`,
    text: message,
    html: `
    <h1>${subject}</h1>
    <div>${message}</div>
    <br/>
    <p>보낸사람: ${from}</p>
    `,
  };

  return transporter.sendMail(mailData);
}
