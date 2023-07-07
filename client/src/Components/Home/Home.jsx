import React, { useState } from "react";
import BookSearchForm from "../SearchForm/SearchForm";
import BookList from "../BookList/BookList";
import { Box, Heading } from "@chakra-ui/react";

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = (queryString) => {
    fetch(`http://localhost:8000/api/books/search/?${queryString}`)
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  };

  return (
    <div> 
      <Box mt={"14"}>
        <Heading>Library Search App</Heading>
      </Box>
      <BookSearchForm onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default Home;
