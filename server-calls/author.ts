import prismadb from "@/lib/prismadb";
import { unstable_noStore as noStore } from "next/cache";

export async function getAuthors() {
  noStore();
  try {
    const author = await prismadb.author.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return author;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Get Author Because of Database Error");
  }
}

export async function getAuthorById(id: string) {
  try {
    const author = await prismadb.author.findUnique({ where: { id: id } });
    return author;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Fetch Author Because Of Database Error");
  }
}
