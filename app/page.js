'use client';
import BookSection from "@/app/components/BookSections";
import Footer from "@/app/components/footer";
import Form from "@/app/components/form";
import Header from "@/app/components/Header";
import BookCards from "./components/bookCards";

export default function Home() {
  return (
    <main>
      <Header />
      <BookSection />
      <Form />
      <BookCards/>
      <Footer />
    </main>
  );
}
