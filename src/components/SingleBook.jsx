import { useState } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // };

  const [selected, setSelected] = useState(false);
  return (
    <Card
      onClick={() => props.changeSelectedBook(props.book.asin)}
      className="h-100"
      style={{
        border:
          props.selectedBook === props.book.asin ? "3px solid red" : "none",
      }}
    >
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
      </Card.Body>
      {/* <Card.Body>{selected && <CommentArea asin={props.asin} />}</Card.Body> */}
    </Card>
  );
};

export default SingleBook;
