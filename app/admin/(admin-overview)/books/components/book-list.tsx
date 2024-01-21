import BookCard from "./book-card";

type Props = {};

const BookList = async (props: Props) => {
  const res = await fetch(`${process.env.NEXTAPP_URL}/api/admin/books`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Cannot Fetch Books");
  }
  const { books, status } = await res.json();

  return (
    <div className="w-full">
      {books?.length > 0 ? (
        <div className="grid grid-cols-4 gap-4 p-5  w-full my-10">
          {books?.map((book: Book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center h-80">
          <h1>Book Not Exist</h1>
        </div>
      )}
    </div>
  );
};

export default BookList;
