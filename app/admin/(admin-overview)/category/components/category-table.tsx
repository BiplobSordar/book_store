import { getCategories } from "@/server-calls/category";

const CategoryTable = async () => {
  const categories = await getCategories();

  if (!categories) {
    return (
      <div>
        <h1>{`Don't Have Any Category`}</h1>
      </div>
    );
  }
  return (
    <>
      <h1 className="text-2xl">Category List</h1>
      <table className="w-3/4 border flex flex-col mt-5">
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
              <td className="w-1/3 flex items-center justify-center h-full border">
                Actions Component
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default CategoryTable;
