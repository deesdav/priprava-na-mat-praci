import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createComment } from "../../models/Comment";

export default function CommentCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const comment = await createComment(formData);
    if (comment.status === 201) {
      redirectToSuccessPage(comment.payload._id);
    } else {
      setInfo(comment.msg);
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
    return navigate(`/createdcomment/${id}`);
  };

  return (
    <>
      <h1>Comment create form</h1>

      <form>
        <input
          type="text"
          required
          name="content"
          placeholder="Enter content"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="author"
          placeholder="Enter author"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="post"
          placeholder="Enter post"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create comment</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
