import { createServer } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function POST() {
  const supabase = await createServer();

  await supabase.auth.signOut();

  redirect("/auth/login");
}
