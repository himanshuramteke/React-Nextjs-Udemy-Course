import { prisma } from "@/lib/db";

async function main() {
  await prisma.post.createMany({
    data: [
      { title: "Hello Prisma" },
      { title: "Learning Prisma" },
      { title: "Postgres quick demo" },
    ],
  });

  console.log(`[seed] Data seeded successfully`);
}
main();
