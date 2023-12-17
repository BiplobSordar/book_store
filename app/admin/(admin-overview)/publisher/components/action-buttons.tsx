import { deletePublisher } from "@/lib/actions/publisherActions";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const DeleteButton = ({ id }: { id: string }) => {
  const deletePublisherById = deletePublisher.bind(null, id);

  return (
    <form action={deletePublisherById}>
      <button type="submit">
        <MdDelete size={20} />
      </button>
    </form>
  );
};
export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/admin/publisher/${id}`}>
      <button>
        <FaEdit size={20} />{" "}
      </button>
    </Link>
  );
};
