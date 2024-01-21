import prismadb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const book = await prismadb.book.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        title: true,
        cover: true,
        price: true,
        publication_date: true,
        language: true,
        description: true,
        isbn: true,
        quantity: { select: { id: true, stock: true } },
        authors: {
          select: { author: { select: { id: true, name: true } } },
        },
        categorys: {
          select: { category: { select: { id: true, title: true } } },
        },
        publisher: { select: { id: true, name: true } },
      },
    });

    if (book === null) {
      return Response.json({ status: 404 });
    }

    return Response.json({ message: "Success", status: 200, book });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Failed", status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const data = await req.json();

  console.log(data, "this is formData");

  try {
    const updatedBook = await prismadb.book.update({
      where: {
        id: params.id,
      },
      data: data,
    });

    return Response.json({ status: 200, message: "Success", updatedBook });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 500, message: "Failed" });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log(params.id);
  const book = prismadb.book.delete({ where: { id: params.id } });
  const author = prismadb.book_To_Author.deleteMany({
    where: {
      bookId: params.id,
    },
  });
  const category = prismadb.category_To_Book.deleteMany({
    where: { bookId: params.id },
  });

  try {
    const deleted = await prismadb.$transaction([category, author, book]);

    return Response.json({ status: 200, message: "Success" });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 500, message: "Failed" });
  }
}
