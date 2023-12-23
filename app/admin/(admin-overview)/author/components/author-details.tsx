import Link from "next/link";
import { DeleteButton, EditButton } from "./action-button";
interface AuthorDetailsProps {
  authorId: string;
  authorName: string;
  publisherId: string;
  publisherName: string;
}

const AuthorDetails = ({
  authorId,
  authorName,
  publisherId,
  publisherName,
}: AuthorDetailsProps) => {
  return (
    <div className="w-full m-1 h-8 gap-2 bg-gray-200 flex justify-between items-center rounded-lg">
      <div className="flex w-2/6 justify-start items-start">
        <Link href={`/admin/author/${authorId}`}>
          <h1 className="ml-10 text-center">{authorName}</h1>
        </Link>
      </div>

      <div className=" w-3/6 flex justify-center items-center">
        <Link href={`/admin/publisher/${publisherId}`}>
          <h1 className="">{publisherName}</h1>
        </Link>
      </div>

      <div className="flex w-0.5/6  items-center gap-4 mr-10">
        <EditButton id={authorId} />

        <DeleteButton id={authorId} />
      </div>
    </div>
  );
};

export default AuthorDetails;
