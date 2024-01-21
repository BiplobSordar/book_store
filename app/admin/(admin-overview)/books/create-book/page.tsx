import {
  getCategoriesForCreatingBook,
  getPublisherForBook,
} from "@/server-calls/books";
import CreateBookForm from "./components/create-book-form";

const AddBook = async () => {
  const [publishers, categories] = await Promise.all([
    getPublisherForBook(),
    getCategoriesForCreatingBook(),
  ]);
  // console.log(publishers, categories);

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl m-4 text-gray-600">Add Book</h2>

      <CreateBookForm publishers={publishers} categories={categories} />
    </div>
  );
};

export default AddBook;
