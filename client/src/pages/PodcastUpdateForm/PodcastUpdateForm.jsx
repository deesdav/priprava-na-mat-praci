import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePodcast, getPodcastById } from "../../models/Podcast";

export default function PodcastUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [podcast, setPodcast] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPodcastById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPodcast(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const podcast = await updatePodcast(id, formData);
    if (podcast.status === 200) {
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
    return navigate(`/podcast/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Podcast not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading podcast...</p>
      </>
    );
  }

  return (
    <>
      <h1>Podcast update form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          defaultValue={podcast.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="host"
          placeholder="Enter host"
          defaultValue={podcast.host}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="episodes"
          placeholder="Enter episodes"
          defaultValue={podcast.episodes}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          defaultValue={podcast.description}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="categories"
          placeholder="Enter categories"
          defaultValue={podcast.categories}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update podcast</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
