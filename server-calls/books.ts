import prismadb from "@/lib/prismadb";

export const getPublisherForBook = async () => {
  try {
    const publishers = await prismadb.publisher.findMany({
      select: {
        id: true,
        name: true,
        authors: {
          select: {
            author: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    return publishers;
  } catch (error) {
    console.log(error);
    throw new Error("Cannot Fetch Publisher For Database Problem");
  }
};
export const getCategoriesForCreatingBook = async () => {
  try {
    const categories = await prismadb.category.findMany({
      select: {
        id: true,
        title: true,
        genre: true,
      },
    });
    return categories;
  } catch (error) {
    console.log(error);
    throw new Error("Canot Fetch Category For Database Problem");
  }
};
