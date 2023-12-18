import Button from "@/components/button";
import Link from "next/link";
import { Suspense } from "react";
import PublisherList from "./components/publisher-list";
import PublisherListSkeleton from "./components/publisher-list-skeleton";

const Publisher = async () => {
  return (
    <div className="flex flex-col justify-evenly items-center">
      <section className="w-full flex h-60 items-center justify-around">
        <div>
          <h1 className="text-gray-600 text-3xl">Publisher</h1>
          <p className="mt-3 text-gray-500">
            All The Publisher Are Here In The Table
          </p>
        </div>
        <div>
          <Link href={"/admin/publisher/create"}>
            <Button label="Add Publisher" />
          </Link>
        </div>
      </section>
      <section className="mt-2 w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl">Publisher List</h1>
        <Suspense fallback={<PublisherListSkeleton />}>
          <PublisherList />
        </Suspense>
      </section>
    </div>
  );
};

export default Publisher;
