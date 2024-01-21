import prismadb from "@/lib/prismadb";
import CreateBookSchema from "@/schema/bookSchema";

export async function POST(req: Request) {
  const data = await req.json();

  const validBookDetails = CreateBookSchema.safeParse(data);

  if (!validBookDetails.success) {
    const errors = validBookDetails.error.flatten().fieldErrors;
    return Response.json({ message: "Validation Error", status: 403, errors });
  } else {
    const {
      title,
      category,
      price,
      publication_date,
      publisher,
      author,
      isbn,
      language,
      quantity,
      cover,
      description,
    } = validBookDetails.data;

    try {
      await prismadb.book.create({
        data: {
          title,
          price,
          publication_date,
          isbn,
          language,
          cover,
          description,
          publisherId: publisher,
          quantity: {
            create: { stock: quantity },
          },
          categorys: {
            create: {
              categoryId: category,
            },
          },
          authors: {
            create: {
              authorId: author,
            },
          },
        },
        include: {
          quantity: true,
          authors: true,
          publisher: true,
          categorys: true,
        },
      });

      return Response.json({ message: "Add Book Successfull", status: 200 });
    } catch (error) {
      console.log(error);
      return Response.json({ message: "Book Creation Failed", status: 500 });
    }
  }
}
