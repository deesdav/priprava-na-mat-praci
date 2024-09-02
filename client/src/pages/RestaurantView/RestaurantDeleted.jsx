import { Link, useParams } from "react-router-dom";

export default function RestaurantDeleted() {
  const { id } = useParams();

  return (
    <>
      <p>Your restaurant {id} was deleted</p>
      <Link to={"/"}>
        <p>Go home</p>
      </Link>
    </>
  );
}
