import { getPublisher } from "@/server-calls/publisher";
import PublisherDetails from "./publisher-field";

const PublisherList = async () => {
  const publishers = await getPublisher();

  return (
    <div className="w-2/3 flex p-3  flex-col justify-center items-center  mt-3 bg-white rounded-t-lg">
      {publishers.length > 0 ? (
        publishers.map((publisher) => (
          <PublisherDetails
            key={publisher.id}
            name={publisher.name}
            id={publisher.id}
          />
        ))
      ) : (
        <h2>No Publisher Exist</h2>
      )}
    </div>
  );
};

export default PublisherList;
