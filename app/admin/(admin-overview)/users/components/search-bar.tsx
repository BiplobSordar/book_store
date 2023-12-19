type Props = {};

const SearchBar = () => {
  return (
    <div className="h-40 w-2/3 rounded-xl flex justify-center items-center">
      <input
        className="w-full rounded-xl h-8 bg-gray-200 text-center outline-none"
        type="text"
        placeholder="Search User With This Search Bar"
      />
    </div>
  );
};

export default SearchBar;
