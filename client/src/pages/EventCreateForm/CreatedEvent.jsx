import { useParams, Link } from "react-router-dom";

export default function CreatedEvent() {
  const { id } = useParams();

  return (
    <>
      <p>Event was created: {id}</p>
      <Link to={`/event/${id}`}>
        <p>View event</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
