import { useParams, Link } from "react-router-dom";

export default function CreatedPrescription() {
  const { id } = useParams();

  return (
    <>
      <p>Prescription was created: {id}</p>
      <Link to={`/prescription/${id}`}>
        <p>View prescription</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
