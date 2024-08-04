import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createMusicalbum } from "../../models/Musicalbum";

export default function MusicalbumCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const musicalbum = await createMusicalbum(formData);
    if (musicalbum.status === 201) {
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
    return navigate(`/createdmusicalbum/${id}`);
  };

  return (
    <>
      <h1>Music album create form</h1>

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
          name="artist"
          placeholder="Enter artist"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="releasedYear"
          placeholder="Enter released year"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="genre"
          placeholder="Enter genre"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="numberOfTracks"
          placeholder="Enter number of tracks"
          onChange={(e) => handleChange(e)}
        />

        <button onClick={handlePost}>Create music album</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
