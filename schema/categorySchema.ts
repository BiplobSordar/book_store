import { string, z } from "zod";
export const CategorySchema = z.object({
  id: z.string(),
  title: z.string().min(5, { message: "Title Must Be Greater Than 5" }),
  genre: string({ invalid_type_error: "Must Select A Genre" }),
  createdAt: z.date(),
  updatedAt: z.date(),
});
