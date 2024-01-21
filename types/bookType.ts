type Author = {
  id: string;
  name: string;
};
type Authors = {
  bookId: string;
  authorId: string;
  author: Author;
};
type Book = {
  id?: string;
  title?: string;
  author?: string;
  price?: string;
  quantity?: string;
  publication_date?: string;
  isbn?: string;
  publisher?: string;
  category?: string;
  cover?: string;
  description?: string;
  language?: string;
};
type BookError = {
  title: string[];
  author: string[];
  price: string[];
  quantity: string[];
  publication_date: string[];
  isbn: string[];
  publisher: string[];
  language: string[];
  category: string[];
  cover: string[];
  description: string[];
};
