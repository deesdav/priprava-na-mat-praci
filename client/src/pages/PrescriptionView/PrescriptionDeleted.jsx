import { Link, useParams } from "react-router-dom";

export default function PrescriptionDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your prescription {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
