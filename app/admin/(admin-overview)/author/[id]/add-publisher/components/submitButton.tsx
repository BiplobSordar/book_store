import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <button
      disabled={pending}
      onClick={() => {
        "i am clicked";
      }}
      className="w-60 h-14 bg-green-400 rounded-lg hover:bg-green-300"
      type="submit"
      //   aria-disabled={pending}
    >
      {pending ? "Publisher Adding.." : "Add Publisher To Author"}
    </button>
  );
}
