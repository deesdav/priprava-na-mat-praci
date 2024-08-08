import { useParams, Link } from "react-router-dom";

export default function CreatedCourse() {
  const { id } = useParams();

  return (
    <>
      <p>Course was created: {id}</p>
      <Link to={`/course/${id}`}>
        <p>View course</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
