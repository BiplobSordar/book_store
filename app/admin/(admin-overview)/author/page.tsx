import Button from "@/components/button";
import Link from "next/link";
import { Suspense } from "react";
import AuthorList from "./components/author-list";
import AuthorListSkeleton from "./components/author-list-skeleton";
export const revalidate = 0;
const Author = () => {
  return (
    <div className="flex flex-col justify-evenly items-center">
      <section className="w-full flex h-60 items-center justify-around">
        <div>
          <h1 className="text-gray-600 text-3xl">Author</h1>
          <p className="mt-3 text-gray-500">
            All The Author Are Here In The List
          </p>
        </div>
        <div>
          <Link href={`/admin/author/create`}>
            <Button label="Add Author" />
          </Link>
        </div>
      </section>
      <section className="mt-2 w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl">Author List</h1>
        <Suspense fallback={<AuthorListSkeleton />}>
          <AuthorList />
        </Suspense>
      </section>
    </div>
  );
};

export default Author;
