import { Link, useParams } from "react-router-dom";

export default function CourseDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your course {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
