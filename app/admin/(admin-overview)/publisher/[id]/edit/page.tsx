import { getPubliherById } from "@/server-calls/publisher";
import { notFound } from "next/navigation";
import CreatePublisherForm from "../../components/create-publisher-form";

const CreatePublisher = async ({ params }: { params: { id: string } }) => {
  const publisher = await getPubliherById(params.id);
  if (!publisher && params.id) {
    notFound();
  }
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex items-center justify-center h-32">
        <h1 className="text-2xl">Create Publisher</h1>
      </div>

      <div className="w-5/6 m-3 p-5 bg-gray-200 rounded-xl">
        <CreatePublisherForm initialFormData={publisher} id={params.id} />
      </div>
    </div>
  );
};

export default CreatePublisher;
