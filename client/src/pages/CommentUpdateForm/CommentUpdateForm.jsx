import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateComment, getCommentById } from "../../models/Comment";

export default function CommentUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [comment, setComment] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCommentById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setComment(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const comment = await updateComment(id, formData);
    if (comment.status === 200) {
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
    return navigate(`/comment/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Comment not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading comment...</p>
      </>
    )
  }

  return (
    <>
      <h1>Comment update form</h1>

      <form>
        <input
          type="text"
          required
          name="content"
          placeholder="Enter content"
          defaultValue={comment.content}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="author"
          placeholder="Enter author"
          defaultValue={comment.author}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="post"
          placeholder="Enter post"
          defaultValue={comment.post}
          onChange={(e) => handleChange(e)}
        />
         
        <button onClick={handlePost}>Update comment</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
