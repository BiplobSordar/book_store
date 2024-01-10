"use client";
import axios from "axios";
import { useState } from "react";
import Category from "../../../category/page";

type Author = { id: string; name: string };
type Publisher = { id: string; name: string };
type Category = { id: string; title: string; genre: string };
type Props = {
  author: Author[];
  publisher: Publisher[];
  category: Category[];
};

const CreateBookForm = (props: Props) => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
    publication_date: "",
    isbn: "",
    publisher: "",
    language: "",
    category: "",
  });
  const handleInputChange = (e: any) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    const res = await axios.post("/api/admin/books/add-book", formData);
    console.log(res.data);
  };

  return (
    <form onSubmit={handelSubmit} className="w-2/3 mx-auto">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-2xl  sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="author"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Author:
        </label>
        <select
          id="author"
          name="author"
          value={formData.author}
          onChange={handleInputChange}
          //   className="mt-1 p-2 border rounded w-full"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          {/* Fetch and populate authors dynamically from your API endpoint or local data */}
          <option className="text-lg">Select Author</option>
          {props.author.map((author) => (
            <option className="text-lg" key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="publisher"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Publisher:
        </label>
        <select
          id="publisher"
          name="publisher"
          value={formData.publisher}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          {/* Fetch and populate publishers dynamically from your API endpoint or local data */}
          <option className="text-lg">Select Publisher</option>
          {props.publisher.map((publisher) => (
            <option className="text-lg" key={publisher.id} value={publisher.id}>
              {publisher.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Category:
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          {/* Fetch and populate publishers dynamically from your API endpoint or local data */}
          <option className="text-lg">Select Category </option>
          {props.category.map((category) => (
            <option className="text-lg" key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="mb-4">
        <label
          htmlFor="genre"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Genre:
        </label>

        <div className="flex p-5">
          <div className="flex items-center me-4">
            <input
              checked={
                formData.genre && formData.genre === "Fiction" ? true : false
              }
              id="genre"
              type="checkbox"
              name="genre"
              value="Fiction"
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Fiction
            </label>
          </div>
          <div className="flex items-center me-4">
            <input
              checked={
                formData.genre && formData.genre !== "Fiction" ? true : false
              }
              id="genre"
              type="checkbox"
              name="genre"
              value="Non-Fiction"
              onChange={handleInputChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="inline-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Non-Fiction
            </label>
          </div>
        </div>
      </div> */}

      {/* <div className="mb-4">
        <label
          htmlFor="genre"
          className="block text-sm font-medium text-gray-700"
        >
          Genre:
        </label>
        <input
          type="text"
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div> */}

      <div className="mb-4">
        <label
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Price:
        </label>
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="quantity"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Quantity Available:
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="publication_date"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Publication Date:
        </label>
        <input
          type="date"
          id="publication_date"
          name="publication_date"
          value={formData.publication_date}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="isbn"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          ISBN:
        </label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={formData.isbn}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="language"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Language:
        </label>
        <input
          type="text"
          id="language"
          name="language"
          value={formData.language}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>

      <div>
        <input
          type="submit"
          value="Add Book"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default CreateBookForm;
