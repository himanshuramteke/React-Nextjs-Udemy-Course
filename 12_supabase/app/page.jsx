import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Supabase Learning with Shadcn UI</h1>
      <form action="/auth/logout" method="post">
        <Button>Logout</Button>
      </form>
    </div>
  );
}
