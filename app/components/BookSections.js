import Image from "next/image";

function BookSection() {
  return (
    <section className="mb-0 dark:bg-black">
      <section className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12">
        <section className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white">
            Welcome to the Book Library
          </h1>

          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 lg:text-xl dark:text-gray-300">
            We are your one-stop destination for all your reading needs. Explore our extensive collection of books: from fiction and non-fiction to biographies and self-help. Find the perfect book for your next read, and enjoy a world of knowledge delivered to your doorstep!
          </p>

          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 rounded-lg bg-cyan-900 hover:bg-cyan-700 focus:ring-4"
          >
            Explore Now
          </a>
        </section>
        <section className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image src="/assest/book.png" alt="Book" width={400} height={400} />
        </section>
      </section>
    </section>
  );
}

export default BookSection;
