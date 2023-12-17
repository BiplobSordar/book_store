"use client";
import { createCategory } from "@/lib/actions/categoryActions";
import { CategorySchema } from "@/schema/categorySchema";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { useFormState } from "react-dom";
interface formProps {
  onClose: () => void;
}

const AddCategoryForm = ({ onClose }: formProps) => {
  const router = useRouter();
  const [errors, setErrors] = useState<categoryForm>();

  const handelsubmit = async (formData: FormData) => {
    const CreateCategory = CategorySchema.omit({
      id: true,
      createdAt: true,
      updatedAt: true,
    });
    const validatedFields = CreateCategory.safeParse({
      genre: formData.get("genre"),
      title: formData.get("title"),
    });

    if (!validatedFields.success) {
      const erros = {
        titel: validatedFields?.error?.flatten()?.fieldErrors?.title?.[0] || "",
        genre: validatedFields?.error?.flatten()?.fieldErrors?.genre?.[0] || "",
      };
      setErrors(erros);

      return;
    }

    const result = await createCategory(validatedFields.data);
    if (result?.titel) {
      setErrors(result);
    }

    if (result?.status === 200) {
      setErrors({});
      onClose();
      router.push("/admin/category");
    }
  };

  return (
    <form action={handelsubmit}>
      {/* Select Input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Select Genre
        </label>
        <select
          name="genre"
          defaultValue={""}
          className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
        >
          <option value="" disabled>
            Select a Genre
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
        </select>
        {errors?.genre ? (
          <p className="mt-2 text-red-500">{errors.genre}</p>
        ) : (
          ""
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Enter Category Name
        </label>
        <input
          type="text"
          name="title"
          className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors?.titel ? (
          <p className="mt-2 text-red-500">{errors.titel}</p>
        ) : (
          ""
        )}
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddCategoryForm;
