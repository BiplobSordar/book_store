import { z } from "zod";

export const CreateBookSchema = z.object({
  title: z.string().min(1, { message: "Title Must Be 1 Char" }),
  author: z.string().uuid({ message: "Please Select Author" }),
  price: z.string().min(1, { message: "Please Insert The Price" }),
  quantity: z.string().min(1, { message: "Please Add Quantity Of The Book" }),
  publication_date: z
    .string()
    .min(1, { message: "Please Add Publication Date" }),
  isbn: z.string().min(1, { message: "Please Add Insb Number" }),
  cover: z.string().min(1, { message: "Please Upload book cover" }),
  publisher: z.string().uuid({ message: "Please Select Publisher" }),
  language: z.string().min(1, { message: "Please Add Language" }),
  category: z.string().uuid({ message: "Please Select Category" }),
  description: z.string().min(1, { message: "Please Enter Discription" }),
});

export default CreateBookSchema;
