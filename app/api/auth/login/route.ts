import prismadb from "@/lib/prismadb";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // check the Email Exist Or Not

    const isValidUser = await prismadb.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (!isValidUser) {
      return Response.json({
        status: 401,
        error: { email: "Use A Valid Email" },
      });
    }

    // compare the password

    const match = await bcrypt.compare(data.password, isValidUser.password);
    if (!match) {
      return Response.json({
        status: 401,
        error: { password: "Invali credentials,,," },
      });
    }

    return Response.json({
      status: 200,
      messsage: "Login Successfully",
      role: isValidUser.role,
    });
  } catch (error) {
    console.log(error);
    return Response.json({ status: 500, error });
  }
}
