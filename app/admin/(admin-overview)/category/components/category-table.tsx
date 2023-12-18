import { getCategories } from "@/server-calls/category";
import { DeleteButton } from "./categoryButtons";

const CategoryTable = async () => {
  const categories = await getCategories();

  return (
    <>
      <h1 className="text-2xl">Category List</h1>
      {categories.length > 0 ? (
        <table className="w-3/4 border flex flex-col mt-3">
          <thead className="border h-8 w-full">
            <tr className="flex h-full w-full items-center justify-evenly">
              <th className="text-center w-1/3">Name</th>
              <th className="text-center w-1/3">Genre</th>
              <th className="text-center w-1/3">Actions</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {categories.map((item) => (
              <tr
                className="w-full h-10 flex items-center justify-evenly border"
                key={item.id}
              >
                <td className="w-1/3 flex items-center justify-center h-full border">
                  {item.title}
                </td>
                <td className="w-1/3 flex items-center justify-center h-full border">
                  {item.genre}
                </td>
                <td className="w-1/3 flex items-center gap-3 justify-center h-full border">
                  <DeleteButton id={item.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-3xl">No Category Exist</h1>
      )}
    </>
  );
};

export default CategoryTable;
