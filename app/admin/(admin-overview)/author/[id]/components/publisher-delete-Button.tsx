"use client";
import { DeletePublisherFromAuthor } from "@/lib/actions/authorActions";
import { useFormStatus } from "react-dom";
import { MdDelete, MdUpdateDisabled } from "react-icons/md";

type Props = { publisherId: string; authorId: string };

export const PublisherDeleteForm = async (props: Props) => {
  return (
    <form action={DeletePublisherFromAuthor}>
      <input type="hidden" name="publisherId" value={props.publisherId} />
      <input type="hidden" name="authorId" value={props.authorId} />
      <PublisherDeleteButton />
    </form>
  );
};

const PublisherDeleteButton = () => {
  const status = useFormStatus();
  console.log(status);
  return (
    <button className="mr-4 hover:text-red-500" type="submit">
      {status.pending ? (
        <MdUpdateDisabled color={"red"} size={20} />
      ) : (
        <MdDelete size={20} />
      )}
    </button>
  );
};
