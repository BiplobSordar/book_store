import BookCardSkeleton from "./book-card-skeleton";

type Props = {};

const BookListSkeleton = (props: Props) => {
  return (
    <div className="grid animate-pulse grid-cols-4 gap-4 h-full w-full my-10">
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
      <BookCardSkeleton />
    </div>
  );
};

export default BookListSkeleton;
