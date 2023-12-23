import AuthorDetails from "./author-details";

const AuthorList = async () => {
  const res = await fetch(`${process.env.NEXTAPP_URL}/api/admin/author`, {
    cache: "no-store",
  });
  const { authors, status, error } = await res.json();
  if (status === 500) {
    throw new Error(error);
  }

  return (
    <>
      <div className="w-2/3 flex p-3  flex-col justify-center items-center  mt-3 bg-white rounded-t-lg">
        {authors.length > 0 ? (
          authors.map((author: any) =>
            author.publishers?.length > 0 ? (
              author.publishers.map((publisher: any) => (
                <AuthorDetails
                  key={author.id}
                  authorId={author.id}
                  authorName={author.name}
                  publisherId={publisher?.publisherId}
                  publisherName={publisher?.publishers.name}
                />
              ))
            ) : (
              <AuthorDetails
                key={author.id}
                authorId={author.id}
                authorName={author.name}
                publisherId={author.publishers[0]?.id}
                publisherName={author.publishers[0]?.name}
              />
            )
          )
        ) : (
          <h2>No Author Exist</h2>
        )}
      </div>
    </>
  );
};

export default AuthorList;
