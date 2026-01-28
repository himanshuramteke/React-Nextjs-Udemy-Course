import BlogContentPage from "@/components/blog-content";
import DeletePostButton from "@/components/delete-post";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createServer } from "@/lib/supabase/server";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { DeletePost } from "./actions";

async function BlogPostPage({ params }) {
  const { id } = await params;
  const supabase = await createServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex ml-auto gap-3 mb-3">
          <Link href="/">
            <Button variant="outline">Back</Button>
          </Link>
          <Link href={`/editor?id=${post.id}`}>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Edit
            </Button>
          </Link>

          <DeletePostButton postId={post.id} action={DeletePost} />
        </div>

        <Card className="p-8 bg-zinc-900 border-zinc-800">
          <h1 className="text-4xl font-bold text-emerald-400 mb-4">
            {post.title}
          </h1>

          <p className="text-zinc-400 mb-8">
            {new Date(post.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="prose prose-invert max-w-none text-zinc-300">
            <BlogContentPage content={post.content.content} />
          </div>
        </Card>
      </div>
    </main>
  );
}

export default BlogPostPage;
