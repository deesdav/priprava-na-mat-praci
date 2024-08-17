import { Link, useParams } from "react-router-dom";

export default function AttendanceDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your attendance {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
