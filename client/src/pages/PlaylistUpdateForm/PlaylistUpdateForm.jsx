import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePlaylist, getPlaylistById } from "../../models/Playlist";

export default function PlaylistUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [playlist, setPlaylist] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPlaylistById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPlaylist(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const playlist = await updatePlaylist(id, formData);
    if (playlist.status === 200) {
      redirectToSuccessPage(playlist.payload._id);
    } else {
      setInfo(playlist.msg);
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
    return navigate(`/playlist/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Playlist not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading playlist...</p>
      </>
    );
  }

  return (
    <>
      <h1>Playlist update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={playlist.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          defaultValue={playlist.description}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="createdBy"
          placeholder="Enter createdBy"
          defaultValue={playlist.createdBy}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="numberOfSongs"
          placeholder="Enter number of songs"
          defaultValue={playlist.numberOfSongs}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update playlist</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
