import Button from "@/components/button";
import Link from "next/link";
import { Suspense } from "react";
import BookList from "./components/book-list";
import BookListSkeleton from "./components/book-list-skeleton";

type Props = {};

const Books = (props: Props) => {
  return (
    <div className="w-full flex flex-col  items-center">
      <div className="w-4/6 h-20 mt-5 flex justify-between items-center">
        <div>
          <h1 className="text-gray-600 text-3xl">Books</h1>
          <p className="mt-3 text-gray-500">
            All The Books Are Here In This Page
          </p>
        </div>
        <div>
          <Link href={"/admin/books/create-book"}>
            <Button label={"Add Book"} />
          </Link>
        </div>
      </div>
      <Suspense fallback={<BookListSkeleton />}>
        <BookList />
      </Suspense>
    </div>
  );
};

export default Books;
