import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateReview, getReviewById } from "../../models/Review";

export default function ReviewUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [review, setReview] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getReviewById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setReview(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const review = await updateReview(id, formData);
    if (review.status === 200) {
      redirectToSuccessPage(review.payload._id);
    } else {
      setInfo(review.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/review/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Review not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading review...</p>
      </>
    );
  }

  return (
    <>
      <h1>Review update form</h1>

      <form>
        <input
          type="text"
          required
          name="user"
          placeholder="Enter user"
          defaultValue={review.user}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="product"
          placeholder="Enter product"
          defaultValue={review.product}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="rating"
          placeholder="Enter rating"
          defaultValue={review.rating}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="comment"
          placeholder="Enter comment"
          defaultValue={review.comment}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update review</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
