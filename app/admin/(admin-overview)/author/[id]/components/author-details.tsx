import prismadb from "@/lib/prismadb";
import Image from "next/image";
import Link from "next/link";
import { PublisherDeleteForm } from "./publisher-delete-Button";

type Props = { id: string };

const AuthorDetails = async (props: Props) => {
  const author = await prismadb.author.findUnique({
    where: {
      id: props.id,
    },
    select: {
      name: true,
      id: true,
      publishers: {
        include: {
          publishers: true,
        },
      },
    },
  });
  return (
    <div className="w-full flex justify-center items-center gap-2">
      <div className="w-2/6 h-96 bg-gray-200 rounded-lg shadow-xl ">
        <div className="w-full h-44 flex justify-center items-center">
          <div className="w-36 h-36">
            <Image
              alt="user-Image"
              src={"/images/default-user.png"}
              height={144}
              width={144}
              className="w-full border border-gray-300 h-full rounded-full object-cover"
            />
          </div>
        </div>
        <hr />

        <div className="w-full my-5 pl-10 flex flex-col gap-5 justify-center items-start">
          <div className="w-full flex justify-between">
            <h1 className="text-lg">{author?.name}</h1>
          </div>
        </div>
      </div>
      <div className="w-3/6 h-96 flex flex-col bg-gray-200 rounded-lg shadow-lg">
        <div className="h-full w-full flex gap-4 justify-start items-start p-5  ">
          <div className="w-4/6 h-full flex flex-col gap-2">
            <h1 className="ml-10 text-gray-400 text-lg mb-2">Publisher List</h1>

            {author?.publishers.map((publisher) => (
              <div
                key={publisher.publisherId}
                className=" w-full h-9 flex items-center justify-between  bg-gray-300 rounded-md shadow-lg"
              >
                <Link href={`/admin/publisher/${publisher.publishers.id}`}>
                  <p></p>
                  <h2 className="ml-2">{publisher.publishers.name}</h2>
                </Link>
                <PublisherDeleteForm
                  authorId={author.id}
                  publisherId={publisher.publishers.id}
                />
              </div>
            ))}
          </div>

          <div className="w-2/6 h-36 bg-gray-300 shadow-lg rounded-md flex flex-col justify-center items-center p-3">
            <p>Total Publisher:{author?.publishers.length}</p>
            <div className="w-full h-full flex justify-center items-center">
              <Link href={`/admin/author/${author?.id}/add-publisher`}>
                <button className="w-32 h-10 flex justify-center items-center bg-green-400 rounded-md shadow-md">
                  Add Publisher
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetails;
