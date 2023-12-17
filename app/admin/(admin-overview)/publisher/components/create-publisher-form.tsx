"use client";
import {
  createPublisher,
  updatePublisher,
} from "@/lib/actions/publisherActions";
import { useFormState } from "react-dom";

const CreatePublisherForm = ({
  id,
  initialFormData,
}: {
  id: string;
  initialFormData: publisherFrom | null;
}) => {
  const updatePublisherById = updatePublisher.bind(null, id);

  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createPublisher, initialState);
  const [state1, dispatch2] = useFormState(updatePublisherById, initialState);

  return (
    <form
      action={initialFormData ? dispatch2 : dispatch}
      className="w-full flex flex-col gap-3 items-center justify-center"
    >
      <div className="w-5/6 flex flex-col  gap-1 ">
        <label htmlFor="name" className="block text-lg text-zinc-950 ml-4">
          Name:
        </label>
        <input
          type="text"
          name="name"
          className="w-3/5 border-none text-center h-8 rounded-xl outline-none"
          placeholder="Enter Published Name"
          id="name"
          defaultValue={initialFormData ? initialFormData.name : ""}
        />
        {state.message ? <p className="text-red-500">{state?.message}</p> : ""}
        {state1?.errors?.name
          ? state1.errors.name.map((err) => (
              <p key={err} className="text-red-500">
                {err}
              </p>
            ))
          : ""}
        {state?.errors?.name
          ? state.errors.name.map((err) => (
              <p key={err} className="text-red-500">
                {err}
              </p>
            ))
          : ""}
      </div>
      <div className="w-5/6 flex flex-col justify-center gap-1 ">
        <label htmlFor="email" className="block text-lg text-zinc-950 ml-4">
          Email:
        </label>
        <input
          type="email"
          name="email"
          className="w-3/5 border-none text-center h-8 rounded-xl outline-none"
          placeholder="Enter Published @Email"
          id="email"
          defaultValue={initialFormData ? initialFormData.email : ""}
        />
        {state1?.errors?.email
          ? state1.errors.email.map((err) => (
              <p key={err} className="text-red-500">
                {err}
              </p>
            ))
          : ""}
        {state?.errors?.email
          ? state.errors.email.map((err) => (
              <p key={err} className="text-red-500">
                {err}
              </p>
            ))
          : ""}
      </div>
      <div className="w-5/6 flex flex-col justify-center gap-1 ">
        <label htmlFor="number" className="block text-lg text-zinc-950 ml-4">
          Number:
        </label>
        <input
          type="text"
          name="phone"
          className="w-3/5 border-none text-center h-8 rounded-xl outline-none"
          placeholder="Enter Published Number +8801962525093"
          id="number"
          defaultValue={initialFormData ? initialFormData.phone : ""}
        />
        {state1?.errors?.phone
          ? state1.errors.phone.map((err) => (
              <p key={err} className="text-red-500">
                {err}
              </p>
            ))
          : ""}
        {state?.errors?.phone
          ? state.errors.phone.map((err) => (
              <p key={err} className="text-red-500">
                {err}
              </p>
            ))
          : ""}
      </div>
      <div className="w-5/6 h-20 flex justify-center items-center">
        <button
          className="h-10 w-1/5 bg-slate-600  rounded-2xl text-white"
          type="submit"
        >
          {initialFormData ? "Update Publisher" : "Create Publisher"}
        </button>
      </div>
    </form>
  );
};

export default CreatePublisherForm;
