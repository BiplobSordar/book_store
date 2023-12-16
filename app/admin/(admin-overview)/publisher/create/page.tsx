import CreatePublisherForm from "../components/create-publisher-form";

type Props = {};

const CreatePublisher = (props: Props) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex items-center justify-center h-32">
        <h1 className="text-2xl">Create Publish Form</h1>
      </div>

      <div className="w-5/6 m-3 p-5 bg-gray-200 rounded-xl">
        <CreatePublisherForm />
      </div>
    </div>
  );
};

export default CreatePublisher;
