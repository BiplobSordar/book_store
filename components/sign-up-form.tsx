"use client";
import axios from "axios";

import Link from "next/link";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

import { FormEvent, useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState<registerandlogin>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({ error: "" });
  const router = useRouter();

  const handelSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();

    await axios

      .post("/api/auth/register", formData)

      .then((res) => {
        setLoading(false);
        const data = res.data;
        console.log(data);
        if (data.status === 200) {
          setError({ error: "" });
          router.push("/login");
        } else {
          setError({ error: data.message });
          setFormData({ email: "", password: "" });
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };
  return (
    <form
      onSubmit={handelSubmit}
      className="w-2/4 h-2/3 bg-white p-6 rounded shadow-md"
    >
      <h1 className="text-gray-600 mb-6">Sign-Up</h1>
      {error ? <h3 className="text-red-500">{error.error}</h3> : null}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData?.email || ""}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your password"
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          value={formData?.password || ""}
          required
          minLength={6}
        />
      </div>
      <button
        onClick={() => {
          console.log("i am clicked");
        }}
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Processing" : "Sign Up"}
      </button>
      <p className="mt-10">
        Already Have An Account?
        <Link className="text-red-500 hover:text-gray-600" href={"/login"}>
          Login Here
        </Link>
      </p>
      <h1 className="mt-5">
        <Link className="text-lg text-orange-400" href={"/"}>
          Go to Store
        </Link>
      </h1>
    </form>
  );
};

export default SignUpForm;
