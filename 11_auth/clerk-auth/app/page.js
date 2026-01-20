import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  console.log(user);
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="mb-5 text-5xl">Clerk Auth</h1>
      <UserButton />
    </div>
  );
}
