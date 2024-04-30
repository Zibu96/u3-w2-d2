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
      className="h-100"
      style={{ border: selected ? "3px solid red" : "none" }}
    >
      <Card.Img
        variant="top"
        src={props.img}
        onClick={() => setSelected(!selected)}
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
      </Card.Body>
      {/* <Card.Body>{selected && <CommentArea asin={props.asin} />}</Card.Body> */}
    </Card>
  );
};

export default SingleBook;
