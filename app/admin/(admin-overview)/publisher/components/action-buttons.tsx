import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
export const DeleteButton = () => {
  return (
    <form>
      <button>
        <MdDelete size={20} />
      </button>
    </form>
  );
};
export const EditButton = () => {
  return (
    <Link href={"/"}>
      <button>
        <FaEdit size={20} />{" "}
      </button>
    </Link>
  );
};
