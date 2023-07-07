import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Text,
  Heading,
  Stack,
  StackDivider,
  Container,
  Divider,
} from "@chakra-ui/react";
import React from "react";

const BookList = ({ books }) => {
  // const books = [
  //   {
  //     title: "Python",
  //     author: "Manikandan",
  //     genre: "Programming",
  //     publication_year: 1965,
  //   },
  //   {
  //     title: "JavaScript",
  //     author: "Manikandan",
  //     genre: "Programming",
  //     publication_year: 1975,
  //   },
  // ];

  return (
    <Container>
      {books.map((book) => (
        <Card key={book.id} mt={5} mb={5}>
          <CardHeader>
            <Heading size="md">{book.title}</Heading>
          </CardHeader>

          <Divider />

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Author
                </Heading>
                <Text pt="2" fontSize="sm">
                  {book.author}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Genre
                </Heading>
                <Text pt="2" fontSize="sm">
                  {book.genre}
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Publication Year:
                </Heading>
                <Text pt="2" fontSize="sm">
                  {book.publication_year}
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        // <li key={book.id}>
        //   <h3>{book.title}</h3>
        //   <p>Author: {book.author}</p>
        //   <p>Genre: {book.genre}</p>
        //   <p>Publication Year: {book.publication_year}</p>
        // </li>
      ))}
    </Container>
  );
};

export default BookList;
