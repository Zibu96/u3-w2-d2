import SingleComment from "./SingleComment";

const CommentsList = (props) => {
  return (
    <div>
      {props.comments.map((book) => {
        return (
          <SingleComment
            comment={book.comment}
            rate={book.rate}
            _id={book._id}
          />
        );
      })}
    </div>
  );
};

export default CommentsList;
