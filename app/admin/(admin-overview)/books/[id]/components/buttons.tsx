"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteImage } from "../../utils/deleteImage";

export const DeleteButton = ({
  id,
  cover,
}: {
  id?: string;
  cover?: string;
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const deleteBook = async (e: any) => {
    setLoading(true);
    const { status, data }: any = deleteImage(cover);

    if (data?.result === "not found") {
      if (status == 200) {
        return;
      }
    }
    const res = await axios.delete(`/api/admin/books/${id}`);
    setLoading(false);

    if (res.data?.status !== 200) {
      return;
    }
    if (res.data?.status === 200) {
      router.replace("/admin/books");
    }
  };
  return (
    <button
      onClick={deleteBook}
      className="bg-green-400 w-1/2 p-2 hover:bg-green-500 hover:text-white rounded-md"
    >
      {loading ? "Deleting,,," : "DeleteBook"}
    </button>
  );
};
