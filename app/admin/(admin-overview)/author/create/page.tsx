"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface formDataType {
  name?: string;
  publisherId?: string;
}
interface errorType {
  name?: string;
  publisherId?: string;
  error?: string;
}

const CreateAuthor = () => {
  const router = useRouter();
  const [publisher, setPublisher] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<errorType>();
  const [formData, setFormData] = useState<formDataType>();
  const getPublishers = async () => {
    try {
      const res = await fetch("/api/admin/publisher");
      const data = await res.json();
      if (data.status && data.error) {
        setError({ error: data.error });
      }
      setPublisher(data.data);
    } catch (error: any) {
      console.log(error);
      throw new Error(error.message);
    }
  };
  useEffect(() => {
    getPublishers();
  }, []);

  const handelSubmit = async (e: React.FormEvent) => {
    setError({});
    setLoading(true);
    e.preventDefault();

    await axios
      .post(
        "/api/admin/author/create",
        formData === undefined ? { name: "", publisherId: "" } : formData
      )
      .then((res) => {
        setLoading(false);
        const data = res.data;
        if (data.status === 502 && data.error) {
          setError({ error: data.error });
        }

        if (data.status === 403) {
          setError(data.error);
        }

        if (data.status === 200) {
          setFormData({});
          router.push("/admin/author");
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-4/6 bg-gray-300 flex-col shadow-gray-500 shadow-lg rounded-md">
        <div className="w-full h-20 flex items-center justify-center">
          {error?.error ? (
            <h1 className="text-lg text-red-500">{error.error}</h1>
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
          <div className="h-14 m-2 w-4/6 flex  gap-2 justify-center items-center">
            <label className="w-2/6 h-8  text-center" htmlFor="name">
              Publisher:
            </label>
            <select
              value={formData?.publisherId || ""}
              onChange={(e) => {
                setFormData({ ...formData, publisherId: e.target.value });
              }}
              className="w-4/6 h-8 outline-none  rounded-md text-center bg-gray-400 "
              name="publisher"
            >
              <option value="">Select A Publisher</option>
              {publisher.map((item: any): any => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          {error?.publisherId ? (
            <p className="text-red-500">{error.publisherId[0]}</p>
          ) : (
            ""
          )}
          <div className="h-14 m-2 w-4/6 flex gap-2 justify-center items-center">
            <button
              type="submit"
              className="h-8 text-lg  w-36 border rounded-md bg-blue-400 hover:bg-blue-300"
            >
              {loading ? "Processing" : "Create Author"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAuthor;
