"use server";

import { createServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function DeletePost(formData) {
  const postId = formData.get("postId");

  const supabase = await createServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  await supabase.from("posts").delete().eq("id", postId).eq("user_id", user.id);

  redirect("/");
}
