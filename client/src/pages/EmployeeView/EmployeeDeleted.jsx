import { Link, useParams } from "react-router-dom";

export default function EmployeeDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your employee {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
