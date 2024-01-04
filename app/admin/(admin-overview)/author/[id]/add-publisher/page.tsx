import { getAuthorById } from "@/server-calls/author";
import { getPublisher } from "@/server-calls/publisher";
import AddPublisherToAuthor from "./components/add-publisher";

type Props = {};

const AddPublisher = async ({ params }: { params: { id: string } }) => {
  const author = await getAuthorById(params.id);
  const publisher = await getPublisher();

  return (
    <div className="h-screen w-full flex justify-center items-start mt-20">
      <div className="w-5/6 h-96 bg-slate-300 rounded-md shadow-md">
        <AddPublisherToAuthor
          id={params.id}
          name={author?.name}
          publishers={publisher}
        />
      </div>
    </div>
  );
};

export default AddPublisher;
