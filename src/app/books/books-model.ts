export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    publishedDate?: string;
    publisher?: string;
    industryIdentifiers?: { type: string, identifier: string }[];
    description?: string;
    imageLinks?: { thumbnail: string };
  };
}
