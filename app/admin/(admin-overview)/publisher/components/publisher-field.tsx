import Link from "next/link";
import { DeleteButton, EditButton } from "./action-buttons";

interface PublisherProps {
  id: string;
  name: string;
}

const PublisherDetails = ({ id, name }: PublisherProps) => {
  return (
    <div className="w-full m-1 h-8 bg-gray-200 flex justify-between items-center rounded-lg">
      <Link href={"/"}>
        <h1 className="ml-10">{name}</h1>
      </Link>
      <div className="flex items-center gap-4 mr-10">
        <EditButton id={id} />
        <DeleteButton id={id} />
      </div>
    </div>
  );
};

export default PublisherDetails;
