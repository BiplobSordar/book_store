import prismadb from "@/lib/prismadb";
import { unstable_noStore as noStore } from "next/cache";

export const getUsers = async () => {
  noStore();
  try {
    const users = await prismadb.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Fetch Users Because Of Database...");
  }
};
