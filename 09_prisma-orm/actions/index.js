"use server";

import { prisma } from "@/lib/db";

export async function seedDB() {
  await prisma.post.createMany({
    data: [
      { title: "Hello Prisma" },
      { title: "Learning Prisma" },
      { title: "Postgres quick demo" },
    ],
  });
  console.log(`[seed] Data seeded successfully`);
}

export const createPost = async () => {
  const post = await prisma.post.create({
    data: {
      title: title,
      description: description,
    },
  });

  return {
    success: true,
    data: post,
  };
};
