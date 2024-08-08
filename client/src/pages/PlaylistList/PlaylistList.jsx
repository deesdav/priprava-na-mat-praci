import { Link } from "react-router-dom";
import PlaylistLink from "./PlaylistLink";
import { useState, useEffect } from "react";
import { getAllPlaylists } from "../../models/Playlist";

export default function PlaylistList() {
  const [playlists, setPlaylists] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllPlaylists();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPlaylists(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Playlists not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Playlists are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Playlist list</h1>
      {
        playlists.map((playlist, index) => (
            <PlaylistLink key={index} name={playlist.name} id={playlist._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
