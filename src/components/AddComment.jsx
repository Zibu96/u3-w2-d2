import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = (props) => {
  // state = {
  //   commentUser: {
  //     comment: "",
  //     rate: "",
  //     elementId: this.props.asin,
  //   },
  // };
  const [commentUser, setCommentUser] = useState({
    comment: "",
    rate: "",
    elementId: props.asin,
  });

  const fetchAddComment = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(commentUser),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWNmNTdmMzA0NjAwMWFlNTlmNmYiLCJpYXQiOjE3MTQzOTUyMjgsImV4cCI6MTcxNTYwNDgyOH0.1rt6R-Dd1KgRS2MfszIvjSL3fZj2zqKl5zBz2LAt57Y",
      },
    })
      .then((response) => {
        if (response.ok) {
          setCommentUser({
            comment: "",
            rate: "",
            elementId: props.asin,
          });
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAddComment();
  };
  const handleFieldChange = (propName, propValue) => {
    setCommentUser({ ...commentUser, [propName]: propValue });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Lascia un commento</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={commentUser.rate}
            onChange={(e) => handleFieldChange("rate", e.target.value)}
          >
            <option>Valuta</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Scrivi il tuo commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={commentUser.comment}
            onChange={(e) => handleFieldChange("comment", e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Invia Commento</Button>
      </Form>
    </div>
  );
};

export default AddComment;
