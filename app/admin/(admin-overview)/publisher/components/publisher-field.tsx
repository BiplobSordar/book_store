import Link from "next/link";
import { DeleteButton, EditButton } from "./action-buttons";

const PublisherDetails = () => {
  return (
    <div className="w-full m-1 h-8 bg-gray-200 flex justify-between items-center rounded-lg">
      <Link href={"/"}>
        <h1 className="ml-10">Md.Safayed</h1>
      </Link>
      <div className="flex items-center gap-4 mr-10">
        <EditButton />
        <DeleteButton />
      </div>
    </div>
  );
};

export default PublisherDetails;
