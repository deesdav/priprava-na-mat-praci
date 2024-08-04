import { Link, useParams, useNavigate } from "react-router-dom";
import { getMusicalbumById, deleteMusicalbum } from "../../models/Musicalbum";
import { useEffect, useState } from "react";

export default function MusicalbumView() {
  const { id } = useParams();
  const [musicalbum, setMusicalbum] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getMusicalbumById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMusicalbum(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === musicalbum.title) {
      const result = await deleteMusicalbum(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong music album title");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedmusicalbum/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Music album not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading music album...</p>
      </>
    )
  }

  return (
    <>
      <h1>Music album view</h1>
      <p className="musicalbumP">Music album id: {id}</p>
      <p>Music album title: {musicalbum.title}</p>
      <p>Music album artist: {musicalbum.artist}</p>
      <p>Music album released year: {musicalbum.releasedYear}</p>
      <p>Music album genre: {musicalbum.genre}</p>
      <p>Music album number of tracks: {musicalbum.numberOfTracks}</p>
      <form>
        <input type="text" placeholder={musicalbum.title} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete music album</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatemusicalbum/${id}`}>
        <p>Update music album</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
