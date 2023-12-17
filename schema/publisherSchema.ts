import { string, z } from "zod";

export const PublisherSchema = z.object({
  id: z.string().uuid({ message: "Id Must Be Needed" }),
  name: string().min(2, { message: "Name Must Be Grater Than 2 Charecter" }),
  email: string().email(),
  phone: string().min(11, { message: "Phone Number Must Be 11 Digit" }),
  createdAt: z.date(),
  updatedAt: z.date(),
});
