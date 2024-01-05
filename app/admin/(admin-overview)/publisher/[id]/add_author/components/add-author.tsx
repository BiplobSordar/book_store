"use client";

import { addAuthorToPublisher } from "@/lib/actions/publisherActions";
import { useState } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "./submit-button";

type Props = {
  id: string;
  name?: string;
  authors: { id: string; name: string }[];
};
interface formDataType {
  option?: string;
}
const initialState = {
  errors: null,
  message: "",
};
const AddAuthorToPublisher = (props: Props) => {
  const [formdata, setFormData] = useState<formDataType>();
  const [state, dispatch] = useFormState(addAuthorToPublisher, initialState);

  return (
    <div className="w-full h-full flex flex-col gap-5 items-center">
      <div className="h-20 w-4/6 flex justify-center items-center ">
        <h1 className="text-lg">{`Add Author To ${props.name}`}</h1>
      </div>
      <p>Select From The Author List To Add...</p>
      <form action={dispatch} className="w-4/6">
        <input type="hidden" name="publisherId" value={props.id} />
        <div className="w-5/6">
          <select
            className="w-full h-10 bg-white rounded-md focus:outline-none"
            value={formdata?.option}
            name="author"
            onChange={(e) => {
              setFormData({ option: e.target.value });
            }}
          >
            <option className="w-full" value="">
              Select Author
            </option>
            {props.authors.map((author) => (
              <option className="w-full" key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
          {state.errors ? (
            <p className="mt-3 text-red-500">{state.errors.author}</p>
          ) : (
            ""
          )}
        </div>

        <div className="w-full flex justify-end mt-10">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default AddAuthorToPublisher;
