import { Link, useParams, useNavigate } from "react-router-dom";
import { getSportteamById, deleteSportteam } from "../../models/Sportteam";
import { useEffect, useState } from "react";

export default function SportteamView() {
  const { id } = useParams();
  const [sportteam, setSportteam] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getSportteamById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSportteam(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === sportteam.name) {
      const result = await deleteSportteam(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong sportteam name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedsportteam/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Sport team not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading sport team...</p>
      </>
    )
  }

  return (
    <>
      <h1>Sportteam view</h1>
      <p className="sportteamP">Spor tteam id: {id}</p>
      <p>Sport team name: {sportteam.name}</p>
      <p>Sport team city: {sportteam.city}</p>
      <p>Sport team founded: {sportteam.founded}</p>
      <p>Sport team championships won: {sportteam.championshipsWon}</p>
      <form>
        <input type="text" placeholder={sportteam.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete sport team</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatesportteam/${id}`}>
        <p>Update sport team</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
