import EditBookForm from "../components/edit-book-form";

import {
  getCategoriesForCreatingBook,
  getPublisherForBook,
} from "@/server-calls/books";
import { notFound } from "next/navigation";

export interface Author {
  author: {
    id: string;
    name: string;
  };
}
export interface Quantity {
  id: string;
  stock: string;
}

export interface Category {
  category: {
    id: string;
    title: string;
  };
}
export interface book {
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
export interface Publisher {
  id: string;
  name: string;
}
const EditBook = async ({ params }: { params: { id: string } }) => {
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

  const [publishers, categories] = await Promise.all([
    getPublisherForBook(),
    getCategoriesForCreatingBook(),
  ]);

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl m-4 text-gray-600">Edit Book</h2>
      <EditBookForm
        book={book}
        publishers={publishers}
        categories={categories}
        CLOUDNARY_API_SECRET={process.env.CLOUDNARY_API_SECRET}
      />
    </div>
  );
};

export default EditBook;
