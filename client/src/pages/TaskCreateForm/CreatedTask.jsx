import { useParams, Link } from "react-router-dom";

export default function CreatedTask() {
  const { id } = useParams();

  return (
    <>
      <p>Task was created: {id}</p>
      <Link to={`/task/${id}`}>
        <p>View task</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
