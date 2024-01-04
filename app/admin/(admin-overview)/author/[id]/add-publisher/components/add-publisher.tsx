"use client";

import { addPublisherToAuthor } from "@/lib/actions/authorActions";
import { useState } from "react";
import { useFormState } from "react-dom";

type Props = {
  id: string;
  name?: string;
  publishers: { id: string; name: string }[];
};
interface formDataType {
  option?: string;
}
const initialState = {
  errors: null,
  message: "",
};
const AddPublisherToAuthor = (props: Props) => {
  const [formdata, setFormData] = useState<formDataType>();
  const [state, dispatch] = useFormState(addPublisherToAuthor, initialState);
  console.log(state);

  return (
    <div className="w-full h-full flex flex-col gap-5 items-center">
      <div className="h-20 w-4/6 flex justify-center items-center ">
        <h1 className="text-lg">{`Add Publisher To ${props.name}`}</h1>
      </div>
      <p>Select From The Publisher List To Add...</p>
      <form action={dispatch} className="w-4/6">
        <input type="hidden" name="authorId" value={props.id} />
        <div className="w-5/6">
          <select
            className="w-full h-10 bg-white rounded-md focus:outline-none"
            value={formdata?.option}
            name="publisher"
            onChange={(e) => {
              setFormData({ option: e.target.value });
            }}
          >
            <option className="w-full" value="">
              Select Publisher
            </option>
            {props.publishers.map((publisher) => (
              <option
                className="w-full"
                key={publisher.id}
                value={publisher.id}
              >
                {publisher.name}
              </option>
            ))}
          </select>
          {state?.errors ? (
            <p className="mt-3 text-red-500">{state.errors.publisher}</p>
          ) : (
            ""
          )}
        </div>

        <div className="w-full flex justify-end mt-10">
          <button
            className="w-60 h-14 bg-green-400 rounded-lg hover:bg-green-300"
            type="submit"
          >
            Add Publisher To Author
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPublisherToAuthor;
