import { z } from "zod";

const bookSchema = z.object({
  title: z.string().min(1),
  author: z.string().uuid({ message: "Please Select Author" }),
  price: z.string().min(1),
  quantity: z.string().min(1),
  publication_date: z.string().min(1),
  isbn: z.string().min(1),
  publisher: z.string().uuid({ message: "Please Select Publisher" }),
  language: z.string().min(1),
  category: z.string().uuid({ message: "Please Select Category" }),
});

export default bookSchema;
