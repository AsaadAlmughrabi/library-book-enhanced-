import { useState, useEffect } from "react";
import {bookData} from "@/app/data/book";


function useSortedBooks(arr) {
  const [sortedBooks, setSortedBooks] = useState([]);

  useEffect(() => {
    
    const sortedArray = [...arr].sort((a, b) => {
      if (a.Title < b.Title) return -1;
      if (a.Title > b.Title) return 1;
      return 0;
    });
    setSortedBooks(sortedArray);
  }, [arr]); 

  return sortedBooks;
}

export default useSortedBooks;
