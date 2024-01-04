import { getAuthors } from "@/server-calls/author";
import { getPubliherById } from "@/server-calls/publisher";
import AddAuthorToPublisher from "./components/add-author";

const AddAuthor = async ({ params }: { params: { id: string } }) => {
  const publisher = await getPubliherById(params.id);
  const author = await getAuthors();
  // console.log(author);
  return (
    <div className="h-screen w-full flex justify-center items-start mt-20">
      <div className="w-5/6 h-96 bg-slate-300 rounded-md shadow-md">
        <AddAuthorToPublisher
          id={params.id}
          name={publisher?.name}
          authors={author}
        />
      </div>
    </div>
  );
};

export default AddAuthor;
