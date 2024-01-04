import { z } from "zod";

export const AddPublisherToAuthor = z.object({
  authorId: z.string().uuid({ message: "Cannot Get Author Id" }),
  publisher: z.string().uuid({ message: "Please Select a Publisher To Add" }),
});
