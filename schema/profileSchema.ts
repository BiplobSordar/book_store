import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(3, { message: "Name Must Be Greater Than 3 Char.." }),
});
