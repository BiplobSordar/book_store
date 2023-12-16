type Props = {};

const Denied = (props: Props) => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white flex flex-col items-center p-8 rounded shadow-md">
        <Image
          width={400}
          height={400}
          src={"/images/403.jpeg"}
          alt="Denied Image"
        />
        <h1 className="text-4xl font-bold mt-3 mb-4">Access Denied</h1>
        <p className="text-gray-600">
          You do not have permission to access this page.
        </p>
      </div>
    </div>
  );
};

export default Denied;
import Image from "next/image";
