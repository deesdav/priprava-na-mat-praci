import { Link, useParams } from "react-router-dom";

export default function CommentDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your comment {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
