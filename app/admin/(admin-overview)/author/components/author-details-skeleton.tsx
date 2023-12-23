const AuthorDetailsSkeleton = () => {
  return (
    <div className="w-full m-1 h-8 bg-gray-200 flex justify-between gap-2 items-center rounded-lg">
      <div className="bg-gray-100 rounded-xl h-4 w-32 ml-10"></div>
      <div className="bg-gray-100 rounded-xl h-4 w-32"></div>
      <div className="bg-gray-100 rounded-xl h-4 w-32 mr-10"></div>
    </div>
  );
};

export default AuthorDetailsSkeleton;
