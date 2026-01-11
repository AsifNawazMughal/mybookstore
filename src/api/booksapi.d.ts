export interface Book {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  category?: string;
}

declare const booksapi: Book[];
export default booksapi;
