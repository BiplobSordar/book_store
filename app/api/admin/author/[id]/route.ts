import prismadb from "@/lib/prismadb";
import { string, z } from "zod";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const author = await prismadb.author.findUnique({
      where: {
        id: params.id,
      },
      select: {
        name: true,
      },
    });

    if (author === null) {
      return Response.json({ status: 404 });
    }

    return Response.json({ status: 200, author });
  } catch (error) {
    console.log(error);

    return Response.json({
      status: 500,
      error: "Cannot Get Author Because Of Database",
    });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { formData } = await req.json();

  const AuthorSchema = z.object({
    name: string().min(5, { message: "Name Must Be Greate Than 5 Char.." }),
  });

  const validData = AuthorSchema.safeParse(formData);

  if (!validData.success) {
    const error = validData.error.flatten().fieldErrors;

    return Response.json({ status: 403, error: error });
  }

  try {
    await prismadb.author.update({
      where: { id: params.id },
      data: formData,
    });

    return Response.json({ status: 200 });
  } catch (error) {
    console.log(error);

    return Response.json({
      status: 500,
      error: "Cannot Update Author Because Of Database Error",
    });
  }
}
