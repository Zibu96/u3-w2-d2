import { useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  // };
  const [comments, setComments] = useState([]);

  const fetchOfBooks = function () {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZWNmNTdmMzA0NjAwMWFlNTlmNmYiLCJpYXQiOjE3MTQzOTUyMjgsImV4cCI6MTcxNTYwNDgyOH0.1rt6R-Dd1KgRS2MfszIvjSL3fZj2zqKl5zBz2LAt57Y",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((books) => {
        console.log(books);
        setComments(books);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchOfBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Comments</p>
      <CommentsList comments={comments} />
      <AddComment asin={props.asin} />
    </div>
  );
};

export default CommentArea;
