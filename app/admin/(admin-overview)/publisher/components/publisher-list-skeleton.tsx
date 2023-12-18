import PublisherDetailsSkeleton from "./publisher-details-skeleton";

const PublisherListSkeleton = () => {
  return (
    <div className="w-2/3 h-full animate-pulse flex p-3   flex-col justify-center items-center  mt-3 bg-white rounded-t-lg">
      <PublisherDetailsSkeleton />
      <PublisherDetailsSkeleton />
      <PublisherDetailsSkeleton />
      <PublisherDetailsSkeleton />
      <PublisherDetailsSkeleton />
      <PublisherDetailsSkeleton />
      <PublisherDetailsSkeleton />
      <PublisherDetailsSkeleton />
      <PublisherDetailsSkeleton />
      <PublisherDetailsSkeleton />
    </div>
  );
};

export default PublisherListSkeleton;
