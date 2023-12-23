"use client";
import { deleteAuthro } from "@/lib/actions/authorActions";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const DeleteButton = ({ id }: { id: string }) => {
  const [buttonId, setButtonId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const handelSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setButtonId(id);
    const deleteAuthorById = deleteAuthro.bind(null, id);
    await deleteAuthorById();
  };

  return (
    <form onSubmit={handelSubmit}>
      <button type="submit" disabled={buttonId === id && loading}>
        <MdDelete
          onMouseOver={({ target }: any) => (target.style.color = "red")}
          onMouseOut={({ target }: any) => (target.style.color = "")}
          color={buttonId === id && loading ? "red" : ""}
          size={20}
        />
      </button>
    </form>
  );
};
export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link href={`/admin/author/${id}/edit`}>
      <button>
        <FaEdit size={20} color={"green"} />{" "}
      </button>
    </Link>
  );
};
