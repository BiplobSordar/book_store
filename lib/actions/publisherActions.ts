"use server";

import { PublisherSchema } from "@/schema/publisherSchema";
import { PublisherState } from "@/types/actionStateType";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import prismadb from "../prismadb";

export async function createPublisher(
  prev: PublisherState,
  formData: FormData
) {
  const CreatePublisher = PublisherSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  });

  const validateFields = CreatePublisher.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  });

  if (!validateFields.success) {
    console.log(validateFields.error.flatten().fieldErrors);
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Publisher",
    };
  }

  const isPublisherExist = await prismadb.publisher.findFirst({
    where: {
      name: validateFields.data.name,
      email: validateFields.data.email,
      phone: validateFields.data.phone,
    },
  });

  if (isPublisherExist) {
    return {
      message: "Already Exist In DataBase Change Name Or Password Or Phone....",
    };
  }

  const { name, email, phone } = validateFields.data;
  await prismadb.publisher.create({
    data: {
      name,
      email,
      phone,
    },
  });

  revalidatePath("/admin/publisher");
  redirect("/admin/publisher");
}

export async function updatePublisher(
  id: string,
  prev: PublisherState,
  formData: FormData
) {
  const UpdatePublisher = PublisherSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true,
  });

  const validateFields = UpdatePublisher.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  });

  // Check form Error
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Publisher",
    };
  }

  try {
    await prismadb.publisher.update({
      where: { id },
      data: {
        name: validateFields.data.name,
        email: validateFields.data.email,
        phone: validateFields.data.phone,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Update user Because Of Database Error");
  }

  revalidatePath("/admin/publisher");
  redirect("/admin/publisher");
}

export async function deletePublisher(id: string) {
  try {
    await prismadb.publisher.delete({
      where: { id },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Delete Publisher Because of Database Error");
  }

  revalidatePath("/admin/publisher");
  redirect("/admin/publisher");
}
