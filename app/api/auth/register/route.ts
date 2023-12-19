import prismadb from "@/lib/prismadb";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
// import bcrypt from "/node_modules/bcrypt";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // password hashing
    const hashpassword = await bcrypt.hash(data.password, 10);

    // find user existance in data base for assigin admin role

    const user = await prismadb.user.findFirst();
    if (user === null) {
      await prismadb.user.create({
        data: {
          email: data.email,
          password: hashpassword,
          role: "SUPER_ADMIN",
        },
      });
      return Response.json({
        status: 200,
        message: "Admin Created Successfully",
      });
    }

    // create user in database
    await prismadb.user.create({
      data: { email: data.email, password: hashpassword },
    });

    return Response.json({ status: 200, message: "User Created Successfully" });
  } catch (error) {
    console.log(error);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (error.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email"
        );
        return Response.json({
          status: 400,
          message: "Use Another Email To Register",
        });
      }
    }
    return Response.json({ status: 500, message: "Something Went wrong" });
  }
}
