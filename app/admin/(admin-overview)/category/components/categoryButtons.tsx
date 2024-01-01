import { deleteCategory } from "@/lib/actions/categoryActions";
import { MdDelete } from "react-icons/md";

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteCategoryById = deleteCategory.bind(null, id);
  return (
    <form
      action={deleteCategoryById}
      className="flex h-full justify-center items-center"
    >
      <button type="submit">
        <MdDelete color={"green"} size={20} />
      </button>
    </form>
  );
};
