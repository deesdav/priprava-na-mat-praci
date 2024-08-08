import { Link, useParams, useNavigate } from "react-router-dom";
import { getPlaylistById, deletePlaylist } from "../../models/Playlist";
import { useEffect, useState } from "react";

export default function PlaylistView() {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPlaylistById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPlaylist(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === playlist.name) {
      const result = await deletePlaylist(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong playlist name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedplaylist/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Playlist not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading playlist...</p>
      </>
    )
  }

  return (
    <>
      <h1>Playlist view</h1>
      <p className="playlistP">Spor tteam id: {id}</p>
      <p>Playlist name: {playlist.name}</p>
      <p>Playlist description: {playlist.description}</p>
      <p>Playlist createdBy: {playlist.createdBy}</p>
      <p>Playlist createdDate: {playlist.createdDate}</p>
      <p>Playlist number of songs: {playlist.numberOfSongs}</p>
      <form>
        <input type="text" placeholder={playlist.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete playlist</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateplaylist/${id}`}>
        <p>Update playlist</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
