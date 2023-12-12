"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FormEvent, useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<registerandlogin>();
  const [loading, setLoading] = useState<boolean>(false);

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await axios.post("/api/auth/login", formData);
      setLoading(false);
      const response = res.data;
      if (response.status === 200) {
        setError({});

        signIn("credentials", {
          email: formData?.email,
          password: formData?.password,
          callbackUrl: `${response.role == "USER" ? "/" : "/admin"}`,
          redirect: true,
        });
      } else {
        setError(response.error);
      }
    } catch (error) {
      setLoading(false);
      // console.log(error);
    }
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="w-2/4 h-2/3 bg-white p-6 rounded shadow-md"
    >
      <h1 className="text-gray-600 mb-6">Login</h1>
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
          className={`w-full px-3 py-2 border ${
            error?.email ? "outline outline-offset-1 outline-red-500" : ""
          } rounded-md focus:outline-none focus:border-blue-500`}
          placeholder="Enter your email"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData?.email}
          required
        />
        <p className="mt-2 text-red-500">{error?.email}</p>
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
          className={`w-full px-3 py-2 border ${
            error?.password ? "outline outline-offset-2 outline-red-500" : ""
          } rounded-md focus:outline-none focus:border-blue-500`}
          placeholder="Enter your password"
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          value={formData?.password}
          minLength={6}
        />
        <p className="mt-2 text-red-500">{error?.password}</p>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        {loading ? "Processing" : "Sign In"}
      </button>
      <p className="mt-10">
        Don't Have An Account?
        <Link className="text-red-500 hover:text-gray-600" href={"/register"}>
          Create Account
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

export default LoginForm;
