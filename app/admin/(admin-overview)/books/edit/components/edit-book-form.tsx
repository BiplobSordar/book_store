"use client";
import axios from "axios";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import Category from "../../../category/page";
import { deleteImage } from "../../utils/deleteImage";
import { book } from "../[id]/page";

type Props = {
  publishers: Publisher[];
  categories: Category[];
  book?: book;
  CLOUDNARY_API_SECRET?: string;
};

type Author = {
  author: {
    id: string;
    name: string;
  };
};

type Publisher = { id: string; name: string; authors: Author[] };
type Category = { id: string; title: string; genre: string };

const EditBookForm = (props: Props) => {
  const router = useRouter();
  const [error, setError] = useState<BookError>();
  const [loading, setLoading] = useState<boolean>(false);
  const [cover, setCover] = useState("");
  const [formData, setFormData] = useState<Book>();
  const [imageDeleting, setImageDeleting] = useState<boolean>(false);
  useEffect(() => {
    setFormData({
      id: props.book?.id,
      title: props.book?.title,
      author: props.book?.authors[0].author.id,
      price: props.book?.price,
      quantity: props.book?.quantity.stock,
      publication_date: props.book?.publication_date,
      isbn: props.book?.isbn,
      publisher: props.book?.publisher.id,
      language: props.book?.language,
      category: props.book?.categorys[0].category.id,
      description: props.book?.description,
    });
    setCover(props.book?.cover || "");
  }, []);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const deleteImageFormCloudAndDatabase = async (e: any) => {
    e.preventDefault();
    setImageDeleting(true);
    const { data, status }: any = await deleteImage(cover);

    if (status === 200 && data.resutl !== "not found") {
      const res = await axios.put(`/api/admin/books/${props.book?.id}`, {
        cover: "/images/empty.png",
      });

      setImageDeleting(false);
      if (res.data.status === 403) {
        setError(res.data.errors);
      }
      if (res.data.status === 200) {
        setCover("");
      }
      if (res.data.status === 500) {
        throw new Error(res.data.message);
      }
    }
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.put(`/api/admin/books/${props.book?.id}`, {
      id: formData?.id,
      title: formData?.title,
      price: formData?.price,
      publication_date: formData?.publication_date,
      isbn: formData?.isbn,
      language: formData?.language,
      description: formData?.description,
      cover: cover,
    });
    setLoading(false);

    if (res.data.status === 403) {
      setError(res.data.errors);
    }
    if (res.data.status === 200) {
      router.push(`/admin/books/${formData?.id}`);
    }
    if (res.data.status === 500) {
      throw new Error(res.data.message);
    }
  };
  return (
    //{loading ? "Processing" : "Add Book"}
    <form className="w-2/3 mx-auto">
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
          value={formData?.title || ""}
          onChange={handleInputChange}
          className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-2xl  sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <span className="text-red-400 my-1">
          {!formData?.title && error?.title ? error.title[0] : ""}
        </span>
      </div>
      <div className="mb-4 w-full">
        {cover ? (
          <div className=" w-1/5 relative my-5   border ">
            <button
              onClick={deleteImageFormCloudAndDatabase}
              className="absolute flex justify-center items-center rounded-full top-3 right-4 w-8 text-center h-8 bg-black"
            >
              <MdDelete color={imageDeleting ? "red" : "white"} size={20} />
            </button>

            <Image
              className="object-fill"
              src={cover}
              alt="Book Cover"
              height={200}
              width={350}
              priority={true}
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
                  // disabled={cover === "/images/empty.png" ? false : true}
                  className="w-full bg-green-400 rounded-md h-14"
                  onClick={(e: any) => {
                    e.preventDefault();
                    open();
                  }}
                >
                  {cover ? "Cover Uploaded" : "Upload Again"}
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
          value={formData?.publisher || ""}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          disabled
        >
          {/* Fetch and populate publishers dynamically from your API endpoint or local data */}
          <option className="text-lg">Select Publisher</option>
          {props.publishers.map((publisher: Publisher) => (
            <option className="text-lg" key={publisher.id} value={publisher.id}>
              {publisher.name}
            </option>
          ))}
        </select>
        <span className="text-red-400 my-1">
          {!formData?.publisher && error?.publisher ? error.publisher[0] : ""}
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
          value={formData?.author || ""}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          disabled
        >
          {/* Fetch and populate authors dynamically from your API endpoint or local data */}
          <option className="text-lg">Select Author</option>
          {props.publishers
            ?.filter(
              (publisher: Publisher) => publisher.id === formData?.publisher
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
          {!formData?.author && error?.author ? error.author[0] : ""}
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
          disabled
        >
          {/* Fetch and populate category dynamically from your API endpoint or local data */}
          <option className="text-lg">Select Category </option>
          {props.categories.map((category: Category) => (
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
          value={formData?.description || ""}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <span className="text-red-400 my-1">
          {!formData?.description && error?.description
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
          value={formData?.price || 0}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <span className="text-red-400 my-1">
          {!formData?.price && error?.price ? error.price[0] : ""}
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
          value={formData?.quantity || 0}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
        <span className="text-red-400 my-1">
          {!formData?.quantity && error?.quantity ? error.quantity[0] : ""}
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
          value={formData?.publication_date || ""}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <span className="text-red-400 my-1">
          {!formData?.publication_date && error?.publication_date
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
          type="number"
          id="isbn"
          name="isbn"
          value={formData?.isbn || ""}
          onChange={handleInputChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
        <span className="text-red-400 my-1">
          {!formData?.isbn && error?.isbn ? error.isbn[0] : ""}
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
          value={formData?.language || ""}
          onChange={handleInputChange}
          className="mt-1 p-2 border rounded w-full"
          required
        />
        <span className="text-red-400 my-1">
          {!formData?.language && error?.language ? error.language[0] : ""}
        </span>
      </div>

      <div className="mt-5">
        <button
          onClick={handelSubmit}
          className="bg-blue-500 w-36  text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          {loading ? "Processing" : "Update Book"}
        </button>
      </div>
    </form>
  );
};

export default EditBookForm;
