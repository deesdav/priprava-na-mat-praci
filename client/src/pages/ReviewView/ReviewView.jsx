import { Link, useParams, useNavigate } from "react-router-dom";
import { getReviewById, deleteReview } from "../../models/Review";
import { useEffect, useState } from "react";

export default function ReviewView() {
  const { id } = useParams();
  const [review, setReview] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getReviewById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setReview(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === review.user) {
      const result = await deleteReview(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong review user");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedreview/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Review not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading review...</p>
      </>
    )
  }

  return (
    <>
      <h1>Review view</h1>
      <p className="reviewP">Review id: {id}</p>
      <p>Review user: {review.user}</p>
      <p>Review product: {review.product}</p>
      <p>Review rating: {review.rating}</p>
      <p>Review comment: {review.comment}</p>
      <form>
        <input type="text" placeholder={review.user} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete review</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatereview/${id}`}>
        <p>Update review</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
