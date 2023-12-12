import SignUpForm from "@/components/sign-up-form";
import Image from "next/image";

type Props = {};

const Register = (props: Props) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-1/2 h-full  flex flex-col items-center justify-evenly  text-center">
        <Image
          className="object-contain"
          src="/images/auth.jpeg"
          width={400}
          height={450}
          alt="Auth Image"
        />

        <div>
          <h2 className="text-3xl  font-semibold text-gray-800">
            Sign Up.......
          </h2>
          <p className="text-gray-500 text-xl mt-2">
            Welcome To This Website ....To Oder A Book Register Please!!!{" "}
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full flex justify-center items-center text-center">
        <SignUpForm />
      </div>
    </div>
  );
};

export default Register;
