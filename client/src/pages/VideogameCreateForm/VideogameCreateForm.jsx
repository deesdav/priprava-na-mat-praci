import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createVideogame } from "../../models/Videogame";

export default function VideogameCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const videogame = await createVideogame(formData);
    if (videogame.status === 201) {
      redirectToSuccessPage(videogame.payload._id);
    } else {
      setInfo(videogame.msg);
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
    return navigate(`/createdvideogame/${id}`);
  };

  return (
    <>
      <h1>Videogame create form</h1>

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
          name="developer"
          placeholder="Enter developer"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="genres"
          placeholder="Enter genres"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="platforms"
          placeholder="Enter platforms"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="rating"
          placeholder="Enter rating"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create videogame</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
