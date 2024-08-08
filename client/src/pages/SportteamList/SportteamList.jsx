import { Link } from "react-router-dom";
import SportteamLink from "./SportteamLink";
import { useState, useEffect } from "react";
import { getAllSportteams } from "../../models/Sportteam";

export default function SportteamList() {
  const [sportteams, setSportteams] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllSportteams();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setSportteams(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Sport teams not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Sport teams are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Sport team list</h1>
      {
        sportteams.map((sportteam, index) => (
            <SportteamLink key={index} name={sportteam.name} id={sportteam._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
