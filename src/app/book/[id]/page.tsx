// src/app/book/[id]/page.tsx
import React from "react";

interface Book {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
}

const BookPage: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const { id } = params;

  // 예시 JSON 데이터
  const exampleResponse: Book = {
    title: "Example Book Title",
    description: "This is a description of the example book.",
    author: "John Doe",
    publishedDate: "2023-01-01",
  };

  const bookData = exampleResponse;

  return (
    <div className="g_main_content">
      <h1>Book ID: {id}</h1>
      <h2>{bookData.title}</h2>
      <p>{bookData.description}</p>
      <p>
        <strong>Author:</strong> {bookData.author}
      </p>
      <p>
        <strong>Published Date:</strong> {bookData.publishedDate}
      </p>
    </div>
  );
};

export default BookPage;
