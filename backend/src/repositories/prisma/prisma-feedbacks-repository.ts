import { prisma } from "../../prisma";
import { v4 as uuidv4 } from "uuid";
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        // Using uuid package here because
        // the schema.prisma uuid default isn't working
        id: uuidv4(),
        type,
        comment,
        screenshot,
      },
    });
  }
}
