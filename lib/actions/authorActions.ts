"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prismadb from "../prismadb";

export async function deleteAuthro(id: string) {
  try {
    await prismadb.author.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Delete User Because of Database Error");
  }

  revalidatePath("/admin/author");
  redirect("/admin/author");
}
