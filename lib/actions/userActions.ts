"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prismadb from "../prismadb";

export async function PromoteUserToAdmin(id: string) {
  try {
    await prismadb.user.update({
      where: { id },
      data: { role: "ADMIN" },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Update User Because of Database Error");
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export const DeleteUser = async (id: string) => {
  try {
    await prismadb.user.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Delete User Because of Database Error");
  }
  revalidatePath("/admin/users");
  redirect("/admin/users");
};
export const demoteToUser = async (id: string) => {
  const session = await getServerSession(authOptions);

  try {
    const superAdmin = await prismadb.user.findUnique({
      where: { id: session?.user.id },
    });

    if (!superAdmin) {
      throw new Error("Unauthorize User 401 Error");
    }

    await prismadb.user.update({
      where: { id },
      data: { role: "USER" },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Perform Command Because of Database Error");
  }
  revalidatePath("/admin/users");
  redirect("/admin/users");
};
