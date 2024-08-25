'use client';
import React, { useState } from 'react';
import BookSection from "@/app/components/BookSections";
import Footer from "@/app/components/footer";
import Form from "@/app/components/form";
import Header from "@/app/components/Header";
import BookCards from "./components/bookCards";
import useSortedBooks from "@/app/custom_hook/useSortedBooks"; 
import {bookData as data} from "@/app/data/book";

export default function Home() {
  const [bookData, setBookData] = useState(data);
  const sorted = useSortedBooks(bookData);

  const addBook = (newBook) => {
    setBookData(prevBooks => [...prevBooks, newBook]);
  };

  return (
    <main>
     
      <BookSection />
      <Form addBook={addBook} />
      <BookCards books={sorted} />
      <Footer />
    </main>
  );
}
