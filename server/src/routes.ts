import express from "express";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { NodemailerMailAdapter } from "./adapters/nodemailer-mail-adapter";

export const routes = express();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});
