import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateSportteam, getSportteamById } from "../../models/Sportteam";

export default function SportteamUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [sportteam, setSportteam] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getSportteamById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSportteam(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const sportteam = await updateSportteam(id, formData);
    if (sportteam.status === 200) {
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
    return navigate(`/sportteam/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Sport team not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading sport team...</p>
      </>
    );
  }

  return (
    <>
      <h1>Sport team update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={sportteam.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="city"
          placeholder="Enter city"
          defaultValue={sportteam.city}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="founded"
          placeholder="Enter founded"
          defaultValue={sportteam.founded}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="championshipsWon"
          placeholder="Enter championships won"
          defaultValue={sportteam.championshipsWon}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update sport team</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
