import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const authors = await prismadb.author.findMany({
      select: {
        name: true,
        id: true,
        publishers: {
          include: {
            publishers: {
              select: { name: true },
            },
          },
        },
      },
    });

    return Response.json({ status: 200, authors });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 500,
      error: "Cannot Get Authro Because Of Database Error",
    });
  }
}
