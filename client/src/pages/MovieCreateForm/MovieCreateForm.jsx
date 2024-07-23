import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createMovie } from "../../models/Movie";

export default function MovieCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const movie = await createMovie(formData);
    if (movie.status === 201) {
      redirectToSuccessPage(movie.payload._id);
    } else {
      setInfo(movie.msg);
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
    return navigate(`/createdmovie/${id}`);
  };

  return (
    <>
      <h1>Movie create form</h1>

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
          name="director"
          placeholder="Enter director"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="releaseYear"
          placeholder="Enter release year"
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
          name="duration"
          placeholder="Enter duration"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="rating"
          placeholder="Enter is rating (0 - 10)"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create movie</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
