"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface formDataType {
  name?: string;
}
interface errorType {
  name?: string;
  error?: string;
}

const EditAuthor = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>();
  const [formData, setFormData] = useState<formDataType>();

  const getAuthor = async () => {
    try {
      const res = await fetch(`/api/admin/author/${params.id}`);

      const data = await res.json();
      const { status, error } = data;
      if (status === 500 && error) {
        setError({ error: error });
      }
      if (status === 404) {
        router.push("/not-found");
      }
      if (status === 200) {
        const { name } = data.author;
        setFormData({
          name,
        });
      }
    } catch (error) {
      console.log(error);
      throw new Error("Cannot Fetch Author Sata Because Of Error");
    }
  };
  useEffect(() => {
    getAuthor();
  }, []);

  const handelSubmit = async (e: React.FormEvent) => {
    setError({});
    setLoading(true);
    e.preventDefault();

    await axios
      .put(`/api/admin/author/${params.id}`, {
        formData,
      })
      .then((res) => {
        setLoading(false);
        const { status, error } = res.data;
        console.log(error, status);
        if (error && status === 500) {
          setError({ error: error });
          setTimeout(() => {
            setError({});
          }, 3000);
        }

        if (status === 403) {
          setError(error);
        }

        if (status === 200) {
          setFormData({});
          router.push("/admin/author");
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  return formData ? (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/6 bg-gray-300 flex-col shadow-gray-500 shadow-lg rounded-md">
        <div className="w-full h-20 flex flex-col items-center justify-center">
          {error?.error ? (
            <h1 className="text-red-500 mb-3">{error.error}</h1>
          ) : (
            ""
          )}
          <h1 className="text-lg">Add Authro Form</h1>
        </div>
        <form
          onSubmit={handelSubmit}
          className="w-full flex flex-col justify-center items-center"
        >
          <div className="h-14 m-2 w-4/6 flex  gap-2 justify-center items-center">
            <label className="w-2/6 h-8  text-center" htmlFor="name">
              Name:
            </label>
            <input
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
              className="w-4/6 h-8 outline-none  rounded-md text-center"
              type="text"
              id="name"
              placeholder="Enter Authro Name"
              value={formData?.name || ""}
            />
          </div>
          {error?.name ? <p className="text-red-500">{error.name[0]}</p> : ""}

          <div className="h-14 m-2 w-4/6 flex gap-2 justify-center items-center">
            <button
              type="submit"
              className="h-8 text-lg  w-36 border rounded-md bg-blue-400 hover:bg-blue-300"
            >
              {loading ? "Processing" : "Update Author"}
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/6 h-80 bg-gray-300 flex flex-col items-center justify-center shadow-gray-500 shadow-lg rounded-md">
        {error?.error ? (
          <h1 className="text-xl text-red-500">{error.error}</h1>
        ) : (
          <h1 className="text-3xl">Loading...... </h1>
        )}
      </div>
    </div>
  );
};

export default EditAuthor;
