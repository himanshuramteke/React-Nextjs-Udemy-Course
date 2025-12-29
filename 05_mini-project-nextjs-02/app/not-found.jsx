import Image from "next/image";
import Link from "next/link";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <Image
        src="/not-found.svg"
        alt="not-found image"
        height={800}
        width={600}
      />

      <Link
        className="text-black mt-10 px-3 py-3 bg-indigo-500 rounded-xl"
        href={"/"}
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Notfound;
