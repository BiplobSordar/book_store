import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DeleteButton } from "./components/buttons";

interface Author {
  author: {
    id: string;
    name: string;
  };
}
interface Quantity {
  id: string;
  stock: string;
}

interface Category {
  category: {
    id: string;
    title: string;
  };
}
interface book {
  id: string;
  title: string;
  cover: string;
  price: string;
  publication_date: string;
  description: string;
  language: string;
  isbn: string;
  authors: Author[];
  categorys: Category[];
  publisher: Publisher;
  quantity: Quantity;
}
interface Publisher {
  id: string;
  name: string;
}
const SingleBook = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(
    `${process.env.NEXTAPP_URL}/api/admin/books/${params?.id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Cannot Fetch Book Because Of Database Error");
  }

  const {
    book,
    status,
    message,
  }: { book?: book; status?: number; message?: string } = await res.json();

  if (status === 404) {
    notFound();
  }
  return (
    <>
      <div className="w-[90%]  mx-auto mt-3 bg-white shadow-lg p-8">
        <div className="w-full flex">
          <div className="w-1/2  h-90 flex justify-center items-center">
            <div className="h-[90%] w-[60%] p-1 border-2 ">
              <Image
                className="object-fill w-full h-full border-black"
                src={book?.cover ? book.cover : ""}
                width={400}
                height={700}
                alt="Book Cover"
              />
            </div>
          </div>
          <div className="w-1/2 border-x h-80 p-3 ">
            <div className="mt-10">
              <h1 className="text-xl my-3 text-gray-950">{book?.title}</h1>
              {
                <h2 className="text-xl my-5 text-gray-600">
                  By{" "}
                  {book?.authors?.map((author: Author) => (
                    <Link
                      href={`/admin/author/${author.author.id}`}
                      key={author.author.id}
                    >
                      <span className="text-green-400">
                        {author.author.name}
                      </span>
                    </Link>
                  ))}
                </h2>
              }
              <h1 className="text-xl my-5 text-gray-600">
                Category :{" "}
                {book?.categorys.map((category: Category) => (
                  <Link
                    href={`/admin/author/${category.category.id}`}
                    key={category.category.id}
                  >
                    <span
                      key={category.category.id}
                      className="bg-yellow-200 p-1 rounded"
                    >
                      {category.category.title}
                    </span>
                  </Link>
                ))}
              </h1>

              <p className="text-3xl my-5 text-blue-300">
                Price : {book?.price} BDT
              </p>
              <p className="text-lg my-5">
                Stock :{" "}
                <span className="text-green-500">
                  {Number(book?.quantity?.stock) > 0
                    ? "Available"
                    : "Stock Out"}
                </span>
              </p>
            </div>
            <div className="w-[60%] flex justify-center items-center gap-4 h-20">
              {/* <AddToCartButton />

              <AddToWishList /> */}
              <Link className="w-full" href={`/admin/books/edit/${book?.id}`}>
                <button className="w-1/2 bg-green-400 rounded-md h-10">
                  Edit book
                </button>
              </Link>
              <DeleteButton cover={book?.cover} id={book?.id} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex gap-8 flex-col items-center py-5  mx-auto bg-white shadow-lg mt-5">
        <h1 className="mt-5 text-lg border-b">Book Specification & Summary</h1>
        <div className=" w-[70%]">
          <h3 className="text-lg  m-2">Description</h3>
          <p className="text-gray-500">{book?.description}</p>
        </div>
        <h1>Details About The book</h1>
        <table className="w-[70%] my-5 border">
          <tbody className="w-full">
            <tr className="w-full h-10 border">
              <td className="border  w-1/6 text-center">Title</td>
              <td className="w-4/6 text-center">{book?.title}</td>
            </tr>

            <tr className="w-full h-10 border">
              <td className="border  w-1/6 text-center">Price</td>
              <td className="w-4/6 text-center">{book?.price} BDT</td>
            </tr>
            <tr className="w-full h-10 border">
              <td className="border  w-1/6 text-center">Publiscation Date</td>
              <td className="w-4/6 text-center">{book?.publication_date}</td>
            </tr>
            <tr className="w-full h-10 border">
              <td className="border  w-1/6 text-center">Language</td>
              <td className="w-4/6 text-center">{book?.language}</td>
            </tr>
            <tr className="w-full h-10 border">
              <td className="border  w-1/6 text-center">Author</td>
              <td className="w-4/6 text-blue-400 text-center">
                {book?.authors?.map((author: Author) => (
                  <Link
                    key={author.author.id}
                    href={`/admin/author/${author.author.id}`}
                  >
                    {author.author.name}
                  </Link>
                ))}
              </td>
            </tr>
            <tr className="w-full h-10 border">
              <td className="border  w-1/6 text-center">Category</td>
              <td className="w-4/6 text-blue-400 text-center">
                {book?.categorys?.map((category: Category) => (
                  <Link
                    href={`/admin/category/${category.category.id}`}
                    key={category.category.id}
                  >
                    {category.category.title + ","}
                  </Link>
                ))}
              </td>
            </tr>
            <tr className="w-full h-10 border">
              <td className="border  w-1/6 text-center">ISBN</td>
              <td className="w-4/6 text-center">{book?.isbn}</td>
            </tr>
            <tr className="w-full h-10 border">
              <td className="border  w-1/6 text-center">Publisher</td>
              <td className="w-4/6 text-blue-400 text-center">
                <Link href={`/admin/publisher/${book?.publisher?.id}`}>
                  {" "}
                  {book?.publisher?.name}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SingleBook;
