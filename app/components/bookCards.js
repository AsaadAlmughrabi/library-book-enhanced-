import React from "react";

function BookCards({ books }) {
  return (
    <>
      <div className=" dark:bg-black">
        <section
          id="features"
          className="relative block px-6 py-10 border-t border-b md:py-20 md:px-10 border-neutral-900 bg-neutral-900/30"
        >
          <div className="relative max-w-5xl mx-auto text-center">
            <span className="flex items-center justify-center my-3 font-medium tracking-wider text-gray-900 uppercase">
              Why Explore Our Library
            </span>
            <h2 className="block w-full text-3xl font-bold text-transparent bg-gradient-to-b from-white to-gray-800 bg-clip-text m:text-4xl">
              Discover a World of Knowledge and Adventure
            </h2>
            <p className="w-full max-w-xl mx-auto my-4 font-medium leading-relaxed tracking-wide text-center text-gray-900 bg-transparent">
              Our library offers a curated selection of books across various
              genres, from thrilling mysteries to insightful non-fiction. Dive
              into our diverse collection and find your next great read.
            </p>
          </div>
        </section>
     
        <div className="relative z-10 grid grid-cols-1 gap-10 mx-auto mb-15 max-w-7xl pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, index) => (
            <div
              key={index} // Using index if Title isn't unique
              className="p-8 text-center border rounded-md shadow bg-neutral-900/50"
            >
              <div
                className="flex items-center justify-center w-12 h-12 mx-auto border rounded-md button-text"
                style={{
                  backgroundImage:
                    "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%)",
                  borderColor: "rgb(93, 79, 240)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-color-swatch"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                  <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                  <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                  <line x1="17" y1="17" x2="17" y2="17.01"></line>
                </svg>
              </div>
              <h3 className="mt-6 text-black-800 dark:text-gray-400">Title: {book.name}</h3>
              <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-800 dark:text-gray-400">
                Author: {book.author} - Genre: {book.genre}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BookCards;
