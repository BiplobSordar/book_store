"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { profileSchema } from "@/schema/profileSchema";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prismadb from "../prismadb";

export type State = {
  errors?: {
    name?: string[];
    image?: string[];
  };
  message?: string | null;
};
export async function createProfile(prevState: State, formData: FormData) {
  const valideteProfile = profileSchema.safeParse({
    name: formData.get("name"),
    image: formData.get("image"),
  });

  if (!valideteProfile.success) {
    return {
      errors: valideteProfile.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  const id = session.user.id;
  try {
    await prismadb.profile.create({
      data: {
        name: valideteProfile.data.name,
        userId: `${id}`,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Server Problem Occured");
  }

  revalidatePath("/admin/profile");
  redirect("/admin/profile");
}
