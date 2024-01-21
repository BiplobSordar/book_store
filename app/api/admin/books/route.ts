import prismadb from "@/lib/prismadb";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(req: Request) {
  noStore();
  try {
    const books = await prismadb.book.findMany({
      select: {
        title: true,
        id: true,
        description: true,
        cover: true,
        categorys: {
          include: {
            category: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
        authors: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return Response.json({ message: "Successfull", status: 200, books });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Failed", status: 500 });
  }
}
