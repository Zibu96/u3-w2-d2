import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = ({ books }) => {
  // const books = props.books;
  const [selectedBook, setSelectedBook] = useState(null);

  const changeSelectedBook = (asin) => {
    setSelectedBook(asin);
  };
  return (
    <Container>
      <Row className="row-cols-2">
        <Col className="col-8">
          {books.map((obj) => {
            return (
              <Col lg={2} className="gy-2 d-flex">
                <SingleBook
                  book={obj}
                  selectedBook={selectedBook}
                  changeSelectedBook={changeSelectedBook}
                />
              </Col>
            );
          })}
        </Col>
        <Col className="col-4">
          <CommentArea asin={selectedBook} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
