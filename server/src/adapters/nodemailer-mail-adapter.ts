import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "./mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "11bfc919a99d97",
    pass: "14b52c97f0d6c3",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendmail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedback Widget <oi@feedbackwidget.com>",
      to: "Jozias Martini <jozias.martini@gmail.com>",
      subject,
      html: body,
    });
  }
}
