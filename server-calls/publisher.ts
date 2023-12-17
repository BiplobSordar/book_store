import prismadb from "@/lib/prismadb";
import { unstable_noStore as noStore } from "next/cache";

export async function getPublisher() {
  noStore();
  try {
    const publishers = await prismadb.publisher.findMany();
    return publishers;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Get Publisher Because Of Database Error");
  }
}

export async function getPubliherById(id: string) {
  try {
    const publisher = await prismadb.publisher.findUnique({
      where: {
        id,
      },
    });

    return publisher;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot find Publisher Because Of Database Error");
  }
}
