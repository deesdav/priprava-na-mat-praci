import { Link } from "react-router-dom";
import CommentLink from "./CommentLink";
import { useState, useEffect } from "react";
import { getAllComments } from "../../models/Comment";

export default function CommentList() {
  const [comments, setComments] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllComments();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setComments(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Comments not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Comments are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Comment list</h1>
      {
        comments.map((comment, index) => (
            <CommentLink key={index} name={comment.content} id={comment._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
