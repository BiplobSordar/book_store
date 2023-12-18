"use server";

import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";
import prismadb from "../prismadb";

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

export const deleteCategory = async (id: string) => {
  try {
    await prismadb.category.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Delete Category Because of Database Error");
  }
  revalidatePath("/admin/category");
  redirect("/admin/category");
};
