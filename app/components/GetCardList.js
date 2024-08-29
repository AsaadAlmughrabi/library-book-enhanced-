import React, { useState, useContext } from "react";
import { AuthContext } from "../context/auth";
import useResource from "../custom_hook/useResource";
import Update_modal from "./UpdateModal";

function BookCards() {
  const { tokens } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const resourceData = tokens
    ? useResource()
    : { resource: null, loading: false, isError: true };

  const { resource, loading, isError, deleteFun } = resourceData;

  if (!tokens) {
    console.log("Tokens are not available yet, skipping fetch.");
    return <div>Loading...</div>;
  }

  if (loading) {
    return <div>Loading cards...</div>;
  }

  if (isError) {
    return <div>Error loading cards.</div>;
  }

  if (!resource || !Array.isArray(resource)) {
    return <div>No data available.</div>;
  }

  const handleUpdateClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="dark:bg-black">
      <div className="relative z-10 grid grid-cols-1 gap-10 mx-auto mb-15 max-w-7xl pt-14 sm:grid-cols-2 lg:grid-cols-3">
        {resource.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex justify-end px-4 pt-4">
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                <span className="sr-only">Open dropdown</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 3"
                >
                  <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={item.image || "/path/to/default/image.jpg"}
                alt={`${item.title} image`}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {item.title}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.description}
              </span>
              <div className="flex mt-4 md:mt-6">
                <button
                  onClick={() => deleteFun(item.id)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-500 dark:focus:ring-blue-800"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdateClick(item)}
                  className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ms-2 focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-green-600 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-green-400"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Update_modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          item={selectedItem}
        />
      )}
    </div>
  );
}

export default BookCards;
