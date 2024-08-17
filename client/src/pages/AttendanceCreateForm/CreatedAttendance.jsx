import { useParams, Link } from "react-router-dom";

export default function CreatedAttendance() {
  const { id } = useParams();

  return (
    <>
      <p>Attendance was created: {id}</p>
      <Link to={`/attendance/${id}`}>
        <p>View attendance</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
