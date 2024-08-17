import { Link, useParams, useNavigate } from "react-router-dom";
import { getCommentById, deleteComment } from "../../models/Comment";
import { useEffect, useState } from "react";

export default function CommentView() {

  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const { id } = useParams();
  const [comment, setComment] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCommentById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setComment(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === comment.content) {
      const result = await deleteComment(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong comment content");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedcomment/${id}`);
  }


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
      <h1>Comment view</h1>
      <p className="commentP">Comment id: {id}</p>
      <p>Comment content: {comment.content}</p>
      <p>Comment author: {comment.author}</p>
      <p>Comment post: {comment.post}</p>
      <p>Comment created at: {comment.created_at}</p>
      <p onClick={handleLikeClick}>Comment likes: {likes}</p>
      <form>
        <input type="text" placeholder={comment.content} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete comment</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatecomment/${id}`}>
        <p>Update comment</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
