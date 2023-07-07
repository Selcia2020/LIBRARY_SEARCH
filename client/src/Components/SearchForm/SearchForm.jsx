import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
const BookSearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({});

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const filterParams = Object.entries(filters)
      .filter(([_, value]) => value !== "") // Exclude empty filters
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const queryString = `query=${searchQuery}${
      filterParams ? `&${filterParams}` : ""
    }`;
    onSearch(queryString);
  };

  return (
    <Container>
      <Box>
        <InputGroup mt={10}>
          <Input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search the books"
          />
          <InputRightElement color="gray.300" fontSize="1.2em">
            <Button
              onClick={handleFormSubmit}
              h="1.75rem"
              size="sm"
              cursor={"pointer"}
            >
              <Icon as={BsSearch} color="gray.300" />
            </Button>
          </InputRightElement>
        </InputGroup>
      </Box>
      <Box mt={5}>
        <Center>
          <HStack>
            <Select
              name="genre"
              value={filters.genre || ""}
              onChange={handleFilterChange}
            >
              <option value="">Select Genre</option>
              <option value="fiction">Fiction</option>
              <option value="nonfiction">Non-Fiction</option>
              <option value="fantasy">Fantasy</option>
              <option value="fantasy">Programming</option>
            </Select>

            <Input
              //   width={"28"}
              type="number"
              name="publication_year"
              value={filters.publication_year || ""}
              onChange={handleFilterChange}
              placeholder="Publication Year"
            />
          </HStack>
        </Center>
      </Box>
    </Container>
  );
};

export default BookSearchForm;
