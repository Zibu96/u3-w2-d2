import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
  const books = props.books;
  const [asin, setAsin] = useState(undefined);
  console.log(books);
  return (
    <Container>
      <Row className="row-cols-2">
        <Col className="col-8">
          {books.map((obj) => {
            return (
              <Col lg={2} className="gy-2 d-flex">
                <SingleBook img={obj.img} title={obj.title} asin={obj.asin} />
              </Col>
            );
          })}
        </Col>
        <Col className="col-4">
          <CommentArea asin={books} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
