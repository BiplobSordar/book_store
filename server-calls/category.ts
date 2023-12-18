import prismadb from "@/lib/prismadb";
import { unstable_noStore as noStore } from "next/cache";

export async function getCategories() {
  noStore();

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const categories = await prismadb.category.findMany();
    return categories;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot get Categoryies Because of Database Error");
  }
}
