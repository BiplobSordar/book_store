"use client";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import Category from "../../../category/page";
import Publisher from "../../../publisher/page";
import { deleteImage } from "../../utils/deleteImage";
type Author = {
  author: {
    id: string;
    name: string;
  };
};

type Publisher = { id: string; name: string; authors: Author[] };
type Category = { id: string; title: string; genre: string };
type Props = {
  publishers?: Publisher[];
  categories?: Category[];
};

const CreateBookForm = (props: Props) => {
  const router = useRouter();
  const [error, setError] = useState<BookError>();
  const [loading, setLoading] = useState<boolean>(false);
  const [deletingImage, setDeletingImage] = useState<boolean>(false);

  const [cover, setCover] = useState("");
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
    cover: "",
    description: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const deleteUploadedImage = async (e: any) => {
    e.preventDefault();
    setDeletingImage(true);
    const { status, data }: any = await deleteImage(cover);
    setDeletingImage(false);

    if (status === 200 && data.resutl !== "not found") {
      setCover("");
    }
    if (status !== 200) {
      console.log("Error Occard");
    }
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    // setFormData({ ...formData, cover: cover });
    console.log(formData);
    setLoading(true);
    const res = await axios.post("/api/admin/books/add-book", {
      ...formData,
      cover,
    });
    setLoading(false);

    if (res.data.status === 403) {
      setError(res.data.errors);
    }
    if (res.data.status === 200) {
      router.replace("/admin/books");
    }
    if (res.data.status === 500) {
      throw new Error(res.data.message);
    }
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
        <span className="text-red-400 my-1">
          {!formData.title && error?.title ? error.title[0] : ""}
        </span>
      </div>
      <div className="mb-4 w-full">
        {cover ? (
          <div className=" w-1/5 relative my-5   border ">
            <button
              onClick={deleteUploadedImage}
              className="absolute flex justify-center items-center rounded-full top-3 right-4 w-8 text-center h-8 bg-black"
            >
              <MdDelete color={deletingImage ? "red" : "white"} size={20} />
            </button>

            <Image
              className="object-fill"
              src={cover}
              alt="Book Cover"
              height={400}
              width={200}
            />
          </div>
        ) : (
          ""
        )}
        <h2 className="my-2">Upload Book Cover:</h2>
        <CldUploadWidget
          onSuccess={(result) => {
            setCover(result.info?.secure_url);
          }}
          uploadPreset="r95fkad5"
        >
          {({ open }) => {
            return (
              <>
                <button
                  disabled={cover ? true : false}
                  className="w-full bg-green-400 rounded-md h-14"
                  onClick={() => open()}
                >
                  {cover ? "Cover Uploaded" : "Upload Cover"}
                </button>
              </>
            );
          }}
        </CldUploadWidget>
        <span className="text-red-400 my-1">
          {!cover && error?.cover ? error.cover[0] : ""}
        </span>
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
          {props.publishers?.map((publisher) => (
            <option className="text-lg" key={publisher.id} value={publisher.id}>
              {publisher.name}
            </option>
          ))}
        </select>
        <span className="text-red-400 my-1">
          {!formData.publisher && error?.publisher ? error.publisher[0] : ""}
        </span>
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          <option className="text-lg">Select Author</option>
          {props.publishers
            ?.filter(
              (publisher: Publisher) => publisher.id === formData.publisher
            )[0]
            ?.authors?.map((author: Author) => (
              <option
                key={author.author.id}
                value={author.author.id}
                className="text-lg"
              >
                {author.author.name}
              </option>
            ))}
        </select>
        <span className="text-red-400 my-1">
          {!formData.author && error?.author ? error.author[0] : ""}
        </span>
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
          value={formData?.category || ""}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        >
          {/* Fetch and populate category dynamically from your API endpoint or local data */}
          <option className="text-lg">Select Category </option>
          {props.categories?.map((category: Category) => (
            <option className="text-lg" key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
        <span className="text-red-400 my-1">
          {!formData?.category && error?.category ? error.category[0] : ""}
        </span>
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <span className="text-red-400 my-1">
          {!formData.description && error?.description
            ? error.description[0]
            : ""}
        </span>
      </div>

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
          value={formData.price}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <span className="text-red-400 my-1">
          {!formData.price && error?.price ? error.price[0] : ""}
        </span>
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
        <span className="text-red-400 my-1">
          {!formData.quantity && error?.quantity ? error.quantity[0] : ""}
        </span>
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
        <span className="text-red-400 my-1">
          {!formData.publication_date && error?.publication_date
            ? error.publication_date[0]
            : ""}
        </span>
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
        <span className="text-red-400 my-1">
          {!formData.isbn && error?.isbn ? error.isbn[0] : ""}
        </span>
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
        <span className="text-red-400 my-1">
          {!formData.language && error?.language ? error.language[0] : ""}
        </span>
      </div>

      <div>
        <input
          type="submit"
          value={loading ? "Processing" : "Add Book"}
          className="bg-blue-500 w-36  text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default CreateBookForm;
