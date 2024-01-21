"use client";

import Image from "next/image";

type Props = {};

const BookCardSkeleton = (props: Props) => {
  return (
    <div className="w-56 h-96 m-auto flex flex-col  bg-white rounded overflow-hidden shadow-lg">
      <div className=" h-2/3 m-3   bg-gray-300 rounded-md">
        <Image
          className="object-fill w-full h-full rounded-md"
          src={"/images/empty.png"}
          alt="Empty"
          height={500}
          width={400}
        />
      </div>

      <div className="px-2 mt-4 flex w-full flex-col gap-3  justify-start items-start">
        <h2 className=" text-sm w-52  h-3 mb-1 bg-gray-300 rounded-md"></h2>
        <p className="text-gray-700 block text-xs  w-48  h-3 mb-1 bg-gray-300 rounded-md"></p>
        <span className="text-xs block text-gray-400 w-44 h-3 mb-1 bg-gray-300 rounded-md"></span>
      </div>
    </div>
  );
};

export default BookCardSkeleton;
