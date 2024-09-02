import { Link } from "react-router-dom";
import VideogameLink from "./VideogameLink";
import { useState, useEffect } from "react";
import { getAllVideogames } from "../../models/Videogame";

export default function VideogameList() {
  const [videogames, setVideogames] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllVideogames();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setVideogames(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Videogames not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Videogames are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Videogame list</h1>
      {
        videogames.map((videogame, index) => (
            <VideogameLink key={index} name={videogame.title} id={videogame._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
