type Props = {};

const CategoryTableSkeleton = (props: Props) => {
  return (
    <>
      <h1 className="text-2xl">Category List</h1>

      <table className="w-3/4 border flex flex-col mt-5">
        <thead className="border h-8 w-full bg-gray-200">
          <tr className="flex h-full w-full items-center justify-evenly">
            <th className="text-center w-1/3">Name</th>
            <th className="text-center w-1/3">Genre</th>
            <th className="text-center w-1/3">Actions</th>
          </tr>
        </thead>
        <tbody className="w-full animate-pulse ">
          <tr className="w-full h-10 flex items-center justify-evenly border">
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
          </tr>
          <tr className="w-full h-10 flex items-center justify-evenly border">
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
          </tr>
          <tr className="w-full h-10 flex items-center justify-evenly border">
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
          </tr>
          <tr className="w-full h-10 flex items-center justify-evenly border">
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
          </tr>
          <tr className="w-full h-10 flex items-center justify-evenly border">
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
          </tr>
          <tr className="w-full h-10 flex items-center justify-evenly border">
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
          </tr>
          <tr className="w-full h-10 flex items-center justify-evenly border">
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
          </tr>
          <tr className="w-full h-10 flex items-center justify-evenly border">
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
          </tr>
          <tr className="w-full h-10 flex items-center justify-evenly border">
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
            <td className="w-1/3 flex items-center justify-center bg-gray-300 h-6 mx-2 rounded-xl" />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CategoryTableSkeleton;
