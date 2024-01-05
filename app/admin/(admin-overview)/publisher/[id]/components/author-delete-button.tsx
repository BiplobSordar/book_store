"use client";

import { DeleteAuthorFromPublisher } from "@/lib/actions/publisherActions";
import { useFormStatus } from "react-dom";
import { MdDelete, MdUpdateDisabled } from "react-icons/md";

type Props = { publisherId: string; authorId: string };

export const AuthorDeleteForm = async (props: Props) => {
  return (
    <form action={DeleteAuthorFromPublisher}>
      <input type="hidden" name="publisherId" value={props.publisherId} />
      <input type="hidden" name="authorId" value={props.authorId} />
      <AuthorDeleteButton />
    </form>
  );
};

const AuthorDeleteButton = () => {
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
