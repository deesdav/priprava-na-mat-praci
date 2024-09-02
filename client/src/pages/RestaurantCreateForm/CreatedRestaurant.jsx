import { useParams, Link } from "react-router-dom";

export default function CreatedRestaurant() {
  const { id } = useParams();

  return (
    <>
      <p>Restaurant was created: {id}</p>
      <Link to={`/restaurant/${id}`}>
        <p>View restaurant</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
