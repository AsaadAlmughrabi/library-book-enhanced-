import { useState, useEffect } from "react";

function useSortedBooks(arr) {
  const [sortedBooks, setSortedBooks] = useState([]);

  useEffect(() => {
    // Check if arr is an array
    if (!Array.isArray(arr)) return;

    const sortedArray = [...arr].sort((a, b) => {
      const titleA = a.name
      const titleB = b.name
      
      if (titleA < titleB) return -1;
      if (titleA > titleB) return 1;
      return 0;
    });
    
    setSortedBooks(sortedArray);
  }, [arr]);

  return sortedBooks;
}

export default useSortedBooks;
