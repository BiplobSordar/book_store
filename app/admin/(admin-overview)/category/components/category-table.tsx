interface CategoryItem {
  id: number;
  name: string;
  genre: string;
}

const CategoryTable = () => {
  const categoryItems: CategoryItem[] = [
    { id: 1, name: "Action", genre: "Fiction" },
    { id: 2, name: "Adventure", genre: "Non-Fiction" },
    { id: 3, name: "History", genre: "Fiction" },
    // Add more items as needed
  ];
  return (
    <table className="w-3/4 border flex flex-col mt-5">
      <thead className="border h-8 w-full">
        <tr className="flex h-full w-full items-center justify-evenly">
          <th className="text-center w-1/3">Name</th>
          <th className="text-center w-1/3">Genre</th>
          <th className="text-center w-1/3">Actions</th>
        </tr>
      </thead>
      <tbody className="w-full">
        {categoryItems.map((item) => (
          <tr
            className="w-full h-10 flex items-center justify-evenly border"
            key={item.id}
          >
            <td className="w-1/3 text-center h-full border">{item.name}</td>
            <td className="w-1/3 text-center h-full border">{item.genre}</td>
            <td className="w-1/3 text-center h-full border">
              Actions Component
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoryTable;
