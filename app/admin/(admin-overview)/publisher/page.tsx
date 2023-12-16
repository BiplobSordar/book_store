import Button from "@/components/button";
import Link from "next/link";
import PublisherDetails from "./components/publisher-field";

type Props = {};

const Publisher = (props: Props) => {
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
        <div className="w-2/3 flex p-3  flex-col justify-center items-center  mt-3 bg-white rounded-t-lg">
          <PublisherDetails />
        </div>
      </section>
    </div>
  );
};

export default Publisher;
