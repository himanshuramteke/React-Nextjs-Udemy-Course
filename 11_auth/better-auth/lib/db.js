import "dotenv/config"; // must be first
import { PrismaClient } from "@prisma/client";

// Explicitly pass the URL to PrismaClient
export const db = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
