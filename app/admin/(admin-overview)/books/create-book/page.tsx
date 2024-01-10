import { getAuthors } from "@/server-calls/author";
import { getCategories } from "@/server-calls/category";
import { getPublisher } from "@/server-calls/publisher";
import CreateBookForm from "./components/create-book-form";

const AddBook = async () => {
  //   const [formData, setFormData] = useState({
  //     title: "",
  //     author: "",
  //     genre: "",
  //     price: "",
  //     quantity: "",
  //     publication_date: "",
  //     isbn: "",
  //     publisher: [],
  //     language: "",
  //   });

  //   const handleInputChange = (e: any) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  //   const handlePublisherChange = (e) => {
  //     const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
  //     setFormData({
  //       ...formData,
  //       publisher: selectedOptions,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission here, you can send formData to your API endpoint.
  //     // Example: fetch('/api/addBook', { method: 'POST', body: JSON.stringify(formData) })
  //   };

  const authorList = getAuthors();
  const publisherList = (await getPublisher()).map((publisher) => ({
    id: publisher.id,
    name: publisher.name,
  }));
  const categoryList = getCategories();
  const [author, publisher, category] = await Promise.all([
    authorList,
    publisherList,
    categoryList,
  ]);

  return (
    <div className="container mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl m-4 text-gray-600">Add Book</h2>
      <CreateBookForm
        author={author}
        publisher={publisher}
        category={category}
      />
    </div>
  );
};

export default AddBook;

// import { z } from 'zod';

// const bookSchema = z.object({
//   title: z.string().min(1),
//   author: z.string().min(1),
//   genre: z.string().min(1),
//   price: z.string().min(1),
//   quantity: z.string().min(1),
//   publication_date: z.string().min(1),
//   isbn: z.string().min(1),
//   publisher: z.string().min(1),
//   language: z.string().min(1),
//   category: z.string().min(1),
// });

// export default bookSchema;
