import prismadb from "@/lib/prismadb";
import { string, z } from "zod";

export async function POST(req: Request) {
  const input = await req.json();

  const AuthorSchema = z.object({
    name: string().min(5, { message: "Name Must Be Greate Than 5 Char.." }),
    publisherId: string().uuid({
      message: "Please Select A Valid Publisher...",
    }),
  });

  const validData = AuthorSchema.safeParse({
    name: input.name,
    publisherId: input.publisherId,
  });

  if (!validData.success) {
    // console.log(validData.error.flatten().fieldErrors);

    const error = validData.error.flatten().fieldErrors;
    return Response.json({ status: 403, error });
  }

  try {
    const user = await prismadb.author.create({
      data: {
        name: input.name,
        publishers: {
          create: { publisherId: input.publisherId },
        },
      },
    });

    return Response.json({ status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 502,
      error: "Cannot Create Authro Because Of Database Error",
    });
  }
}
