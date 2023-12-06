type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="w-3/6 flex justify-center items-center ">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 w-full rounded-md bg-gray-700 text-white"
      />
    </div>
  );
};

export default SearchBar;
