import { Link } from "react-router-dom";
import MusicalbumLink from "./MusicalbumLink";
import { useState, useEffect } from "react";
import { getAllMusicalbums } from "../../models/Musicalbum";

export default function MusicalbumList() {
  const [musicalbums, setMusicalbums] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllMusicalbums();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setMusicalbums(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Music albums not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Music albums are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Music album list</h1>
      {
        musicalbums.map((musicalbum, index) => (
            <MusicalbumLink key={index} name={musicalbum.title} id={musicalbum._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
