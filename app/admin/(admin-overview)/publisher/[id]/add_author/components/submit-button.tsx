import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <button
      disabled={pending}
      className="w-60 h-14 bg-green-400 rounded-lg hover:bg-green-300"
      type="submit"
    >
      {pending ? "Author Adding.." : "Add Author To Publisher"}
    </button>
  );
}
