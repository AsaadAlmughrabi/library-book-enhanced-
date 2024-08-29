import Toast from "@/app/components/Toast";
import { useEffect, useState } from "react";
import { bookData } from "@/app/data/book";
import useResource from "../custom_hook/useResource";

function Form() {
  const [showToast, setShowToast] = useState(false);
  const [bookForm, setBookData] = useState([]);
  const { addBook } = useResource();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const genre = e.target[2].value;
    const user = 1;
    const data = {  title:title, description:description, genre, user };

    setBookData([...bookData, data]);

    setShowToast(true);

    addBook(data);
    console.log("........",data);
    
  };

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    }
  }, [showToast]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full dark:bg-black">
        <h1 className="mb-8 text-3xl font-extrabold text-center dark:text-white">
          Register New Book
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm p-6 rounded-lg shadow-md dark:bg-gray-800"
        >
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Author
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Genre
            </label>
            <input
              type="text"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new Book
          </button>
        </form>
      </div>
      {showToast && (
        <Toast message={bookForm} close={() => setShowToast(false)} />
      )}
    </>
  );
}

export default Form;
