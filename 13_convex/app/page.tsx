import { Button } from "@/components/ui/button";
import UserDetails from "@/components/user-details";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <UserDetails />
    </div>
  );
}
