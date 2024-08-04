import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createReview } from "../../models/Review";

export default function ReviewCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const review = await createReview(formData);
    if (review.status === 201) {
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
    return navigate(`/createdreview/${id}`);
  };

  return (
    <>
      <h1>Review create form</h1>

      <form>
      <input
          type="text"
          required
          name="user"
          placeholder="Enter user"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="product"
          placeholder="Enter product"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="rating"
          placeholder="Enter rating"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="comment"
          placeholder="Enter comment"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create review</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
