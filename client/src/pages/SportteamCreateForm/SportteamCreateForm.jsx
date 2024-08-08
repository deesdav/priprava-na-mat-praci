import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createSportteam } from "../../models/Sportteam";

export default function SportteamCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const sportteam = await createSportteam(formData);
    if (sportteam.status === 201) {
      redirectToSuccessPage(sportteam.payload._id);
    } else {
      setInfo(sportteam.msg);
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
    return navigate(`/createdsportteam/${id}`);
  };

  return (
    <>
      <h1>Sport team create form</h1>

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
          name="city"
          placeholder="Enter city"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="founded"
          placeholder="Enter founded"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="championshipsWon"
          placeholder="Enter championshipsWon"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create sport team</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
