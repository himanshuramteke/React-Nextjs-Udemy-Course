import { createPost } from "@/actions";

export default async function Home() {
  return (
    <div>
      Learning Prisma
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Add a post</h2>

        <form action={createPost}>
          <input name="title" placeholder="enter your name" />
          <input name="description" placeholder="enter your description" />
          <button type="submit">Create Post</button>
        </form>
      </section>
    </div>
  );
}
