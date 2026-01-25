import { Spinner } from "@/components/ui/spinner";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Spinner />
    </div>
  );
}

export default Loading;
