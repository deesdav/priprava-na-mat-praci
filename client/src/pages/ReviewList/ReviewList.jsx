import { Link } from "react-router-dom";
import ReviewLink from "./ReviewLink";
import { useState, useEffect } from "react";
import { getAllReviews } from "../../models/Review";

export default function ReviewList() {
  const [reviews, setReviews] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllReviews();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setReviews(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Reviews not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Reviews are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Review list</h1>
      {
        reviews.map((review, index) => (
            <ReviewLink key={index} name={review.user} id={review._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
