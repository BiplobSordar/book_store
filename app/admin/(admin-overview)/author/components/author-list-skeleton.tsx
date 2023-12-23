import AuthorDetailsSkeleton from "./author-details-skeleton";

const AuthorListSkeleton = () => {
  return (
    <div className="w-2/3 h-full animate-pulse flex p-3  gap-2  flex-col justify-center items-center  mt-3 bg-white rounded-t-lg">
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
      <AuthorDetailsSkeleton />
    </div>
  );
};

export default AuthorListSkeleton;
