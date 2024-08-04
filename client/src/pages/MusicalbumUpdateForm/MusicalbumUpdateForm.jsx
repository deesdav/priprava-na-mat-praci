import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateMusicalbum, getMusicalbumById } from "../../models/Musicalbum";

export default function MusicalbumUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [musicalbum, setMusicalbum] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getMusicalbumById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMusicalbum(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const musicalbum = await updateMusicalbum(id, formData);
    if (musicalbum.status === 200) {
      redirectToSuccessPage(musicalbum.payload._id);
    } else {
      setInfo(musicalbum.msg);
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
    return navigate(`/musicalbum/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Music album not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading music album...</p>
      </>
    );
  }

  return (
    <>
      <h1>Music album update form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          defaultValue={musicalbum.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="artist"
          placeholder="Enter artist"
          defaultValue={musicalbum.artist}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="releasedYear"
          placeholder="Enter released year"
          defaultValue={musicalbum.releasedYear}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="genre"
          placeholder="Enter genre"
          defaultValue={musicalbum.genre}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="numberOfTracks"
          placeholder="Enter number of tracks"
          defaultValue={musicalbum.numberOfTracks}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update music album</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
