import { useParams, Link } from "react-router-dom";

export default function CreatedSportteam() {
  const { id } = useParams();

  return (
    <>
      <p>Sport team was created: {id}</p>
      <Link to={`/sportteam/${id}`}>
        <p>View sport team</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
