"use server";

import { revalidatePath } from "next/cache";
import prismadb from "./prismadb";

export type dataType = {
  title: string;
  genre: string;
};
export async function createCategory({ title, genre }: dataType) {
  try {
    const exist = await prismadb.category.findFirst({
      where: {
        title,
        genre,
      },
    });
    if (exist) {
      return { titel: "Category Already Exist Under The Genre" };
    }
    await prismadb.category.create({
      data: {
        title,
        genre,
      },
    });
  } catch (error) {
    throw new Error("Cannot Create Category Because Of Database Error");
  }

  revalidatePath("/admin/category");
  return { status: 200 };
}
