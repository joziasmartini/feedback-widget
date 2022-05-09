import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "11bfc919a99d97",
    pass: "14b52c97f0d6c3",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      // Using uuid package here because
      // the schema.prisma uuid default isn't working
      id: uuidv4(),
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: "Equipe Feedback Widget <oi@feedbackwidget.com>",
    to: "Jozias Martini <jozias.martini@gmail.com>",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type} </p>`,
      `<p>Comentário: ${comment} </p>`,
      `</div>`,
    ].join("\n"),
  });

  return res.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log("HTTP server running!");
});
