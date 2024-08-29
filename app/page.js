"use client";
import React, { useState, useContext } from "react";
import BookSection from "@/app/components/BookSections";
import Footer from "@/app/components/footer";
import Form from "@/app/components/form";
import BookCards from "./components/bookCards";
import useSortedBooks from "@/app/custom_hook/useSortedBooks";
import { bookData as data } from "@/app/data/book";
import LogIn from "./components/login";
import { AuthContext } from "@/app/context/auth";
import BookCardsList from "./components/GetCardList";
import Update_modal from "./components/UpdateModal";

export default function Home() {
  const [bookData, setBookData] = useState(data);
  const sorted = useSortedBooks(bookData);

  const addBook = (newBook) => {
    setBookData((prevBooks) => [...prevBooks, newBook]);
  };

  const { tokens } = useContext(AuthContext);

  return (
    <main>
      {tokens ? (
        <>
          <BookSection />
          <Form addBook={addBook} />
          <Update_modal/>
          <BookCardsList />
          <Footer />
        </>
      ) : (
        <LogIn />
      )}
    </main>
  );
}
