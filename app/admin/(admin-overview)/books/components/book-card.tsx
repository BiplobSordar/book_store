"use client";
// import Image from "next/image";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <Link href={`/admin/books/${book.id}`}>
      <div className="w-56 h-96  flex flex-col items-center rounded-md  bg-white border-gray-300 shadow-lg">
        <div className="w-52 my-3  h-60 rounded-md ">
          <CldImage
            className="object-contain w-full h-full rounded-md"
            src={book.cover ? book.cover : "/images/empty.png"}
            alt="Cover"
            height={400}
            width={600}
          />
        </div>

        <div className="px-6 mt-2 flex flex-col justify-center items-center">
          <h2 className=" text-sm mb-1">{book.title}</h2>
          <p className="text-gray-700 text-xs">
            {book.description ? book.description.slice(0, 60) : ""}
          </p>
          <span className="text-xs  mt-2 text-gray-400">
            {book.authors.map((authordetails) => authordetails.author.name)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
