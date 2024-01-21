import Image from "next/image";

type Props = {};

const Loading = (props: Props) => {
  return (
    <>
      <div className="w-[90%]  mx-auto mt-3 bg-white shadow-lg p-8">
        <div className="w-full flex">
          <div className="w-1/2  h-80 flex justify-center items-center">
            <div className="h-[90%] w-[40%] p-1 border-2 ">
              <Image
                className="object-fill w-full h-full border-black"
                src={"/images/empty.png"}
                width={400}
                height={700}
                alt="Book Cover"
              />
            </div>
          </div>
          <div className="w-1/2 border-x  p-3 ">
            <div className="mt-10">
              <h1 className="text-xl w-72  h-4 my-3 bg-gray-400 rounded-md text-gray-950" />
              <h2 className="text-xl w-64  h-4  bg-gray-400 rounded-md my-5 text-gray-600" />

              <h1 className="text-2xl w-60  h-4  bg-gray-400 rounded-md my-5 text-gray-600" />

              <p className="text-3xl my-5 text-blue-300 w-56  h-4  bg-gray-400 rounded-md" />
              <p className="text-lg my-5 w-64  h-4 bg-gray-400 rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex gap-8 flex-col items-center  h-110 mx-auto bg-white shadow-lg mt-5">
        <h1 className="mt-5 text-lg w-80 border-b   h-4  bg-gray-400 rounded-md" />
        <div className=" w-[70%]">
          <h3 className="text-lg  my-2 w-40  h-4  bg-gray-400 rounded-md" />
          <p className="text-gray-500 mt-2 w-full h-4  bg-gray-400 rounded-md" />
          <p className="text-gray-500 mt-2 w-full h-4  bg-gray-400 rounded-md" />
          <p className="text-gray-500 mt-2 w-full h-4  bg-gray-400 rounded-md" />
          <p className="text-gray-500 mt-2 w-full h-4  bg-gray-400 rounded-md" />
          <p className="text-gray-500 mt-2 w-full h-4  bg-gray-400 rounded-md" />
        </div>
      </div>
    </>
  );
};

export default Loading;
