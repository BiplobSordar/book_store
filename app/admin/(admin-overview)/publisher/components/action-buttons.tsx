"use client";

import { deletePublisher } from "@/lib/actions/publisherActions";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const DeleteButton = ({ id }: { id: string }) => {
  const deletePublisherById = deletePublisher.bind(null, id);

  return (
    <form action={deletePublisherById}>
      <button type="submit">
        <MdDelete
          size={20}
          onMouseOver={({ target }: any) => (target.style.color = "red")}
          onMouseOut={({ target }: any) => (target.style.color = "")}
        />
      </button>
    </form>
  );
};
export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/admin/publisher/${id}/edit`}>
      <button>
        <FaEdit color={"green"} size={20} />{" "}
      </button>
    </Link>
  );
};
