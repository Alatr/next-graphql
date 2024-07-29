import { PrismaClient } from "@prisma/client";

export type DBContext = {
  db: PrismaClient;
};
