import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPodcast } from "../../models/Podcast";

export default function PodcastCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const podcast = await createPodcast(formData);
    if (podcast.status === 201) {
      redirectToSuccessPage(podcast.payload._id);
    } else {
      setInfo(podcast.msg);
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
    return navigate(`/createdpodcast/${id}`);
  };

  return (
    <>
      <h1>Podcast create form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="host"
          placeholder="Enter host"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="episodes"
          placeholder="Enter episodes"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="categories"
          placeholder="Enter categories"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create podcast</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
