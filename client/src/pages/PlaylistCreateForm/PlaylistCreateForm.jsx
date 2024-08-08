import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPlaylist } from "../../models/Playlist";

export default function PlaylistCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const playlist = await createPlaylist(formData);
    if (playlist.status === 201) {
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
    return navigate(`/createdplaylist/${id}`);
  };

  return (
    <>
      <h1>Playlist create form</h1>

      <form>
      <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
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
          name="createdBy"
          placeholder="Enter createdBy"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="numberOfSongs"
          placeholder="Enter number of songs"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create playlist</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
