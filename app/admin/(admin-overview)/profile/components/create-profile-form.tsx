"use client";

import { createProfile } from "@/lib/actions/profileActions";
import { useFormState } from "react-dom";

type Props = {};
const initialState = { message: null, errors: {} };
const CreateProfileForm = (props: Props) => {
  const [state, dispatch] = useFormState(createProfile, initialState);

  return (
    <form
      action={dispatch}
      className="w-4/5 h-full flex-col flex justify-center "
    >
      <div className="w-4/5 h-20  flex items-center gap-12">
        <label className="ml-8 text-lg" htmlFor="name">
          Name:
        </label>
        <input
          className="border-b focus:outline-none w-72"
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name..."
        />
      </div>
      {state?.errors.name ? (
        <p className="ml-8 text-red-500">{state.errors.name}</p>
      ) : (
        ""
      )}
      <div className="w-4/5 h-20  flex items-center gap-12">
        <label className="ml-8 text-lg" htmlFor="image">
          Profile Image:
        </label>
        <input
          className="border rounded-md bg focus:outline-none w-72 file:border-0 file:px-2"
          type="file"
          id="image"
          name="image"
        />
      </div>
      <div className="w-4/5 h-20  flex items-center justify-end">
        <button
          // type="submit"
          className="bg-green-400 h-9 w-40 rounded-md text-white text-lg hover:bg-green-300"
        >
          Create Profile
        </button>
      </div>
    </form>
  );
};

export default CreateProfileForm;
