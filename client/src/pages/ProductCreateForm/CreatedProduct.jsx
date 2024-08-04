import { useParams, Link } from "react-router-dom";

export default function CreatedProduct() {
  const { id } = useParams();

  return (
    <>
      <p>Product was created: {id}</p>
      <Link to={`/product/${id}`}>
        <p>View product</p>
      </Link>
      <Link to={`/`}>
        <p>Go back</p>
      </Link>
    </>
  );
}
