"use server";
import { AddPublisherToAuthor } from "@/schema/authorSchema";
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
export type state = {
  errors?: {
    option?: string[];
  };
  message: string | null;
};
export const addPublisherToAuthor = async (
  prevState: state,
  formData: FormData
) => {
  const validAuthor = AddPublisherToAuthor.safeParse({
    authorId: formData.get("authorId"),
    publisher: formData.get("publisher"),
  });
  if (!validAuthor.success) {
    return {
      errors: validAuthor.error.flatten().fieldErrors,
      message: "Error Happend",
    };
  }

  try {
    const author = await prismadb.author.update({
      where: { id: validAuthor.data.authorId },
      data: {
        publishers: {
          create: {
            publishers: {
              connect: { id: validAuthor.data.publisher },
            },
          },
        },
      },
      include: {
        publishers: true,
      },
    });
    console.log(author);
  } catch (error) {
    console.log(error);
  }

  revalidatePath(`/admin/author/${validAuthor.data.authorId}`);
  redirect(`/admin/author/${validAuthor.data.authorId}`);
};
