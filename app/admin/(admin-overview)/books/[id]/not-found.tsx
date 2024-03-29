import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <Image
          src={"/images/404.jpeg"}
          alt="Not-found Image"
          width={400}
          height={400}
        />
        <div className="mt-10">
          <h1 className="text-2xl font-bold text-gray-800">404 - Not Found</h1>
          <p className="text-gray-600 m-5">Book Not Found..</p>
        </div>
        <Link href={"/"}>
          <Button label="Go Back Home" />
        </Link>
      </div>
    </div>
  );
}
