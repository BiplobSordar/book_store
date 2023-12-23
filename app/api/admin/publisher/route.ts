import prismadb from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const publishers = await prismadb.publisher.findMany();
    // revalidatePath("/admin/author");
    return Response.json({ data: publishers });
  } catch (error) {
    console.log(error);
    return Response.json({
      status: 502,
      error: "Cannot Fecth Publisher Because Of Database Error",
    });
  }
}
