import { Link, useParams, useNavigate } from "react-router-dom";
import { getPodcastById, deletePodcast } from "../../models/Podcast";
import { useEffect, useState } from "react";

export default function PodcastView() {
  const { id } = useParams();
  const [podcast, setPodcast] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPodcastById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPodcast(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === podcast.title) {
      const result = await deletePodcast(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong podcast title");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedpodcast/${id}`);
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
      <h1>Podcast view</h1>
      <p className="podcastP">Podcast id: {id}</p>
      <p>Podcast title: {podcast.title}</p>
      <p>Podcast host: {podcast.host}</p>
      <p>Podcast releaseDate: {podcast.releaseDate}</p>
      <p>Podcast episodes: {podcast.episodes}</p>
      <p>Podcast description: {podcast.description}</p>
      <p>Podcast categories: {podcast.categories}</p>
      <form>
        <input type="text" placeholder={podcast.title} onChange={handleChange} />
        <button onClick={handleDelete}>Delete podcast</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatepodcast/${id}`}>
        <p>Update podcast</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
