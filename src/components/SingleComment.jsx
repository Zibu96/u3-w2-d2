import { Alert, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const SingleComment = function (props) {
  const fetchToDelete = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props._id, {
      method: "DELETE",

      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWNmNTdmMzA0NjAwMWFlNTlmNmYiLCJpYXQiOjE3MTQzOTUyMjgsImV4cCI6MTcxNTYwNDgyOH0.1rt6R-Dd1KgRS2MfszIvjSL3fZj2zqKl5zBz2LAt57Y",
      },
    })
      .then((response) => {
        if (response.ok) {
          <Alert>Commento eliminato</Alert>;
        } else {
          throw new Error(console.log("errore nella cancellazione"));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <ListGroup>
      <ListGroupItem>
        {props.comment} <span>{props.rate}</span>
      </ListGroupItem>
      <Button variant="danger" onClick={fetchToDelete}>
        Cancella Commento
      </Button>
    </ListGroup>
  );
};
export default SingleComment;
