import { Link } from "react-router-dom";
import PodcastLink from "./PodcastLink";
import { useState, useEffect } from "react";
import { getAllPodcasts } from "../../models/Podcast";

export default function PodcastList() {
  const [podcasts, setPodcasts] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllPodcasts();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPodcasts(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Podcasts not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Podcasts are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Podcast list</h1>
      {
        podcasts.map((podcast, index) => (
            <PodcastLink key={index} name={podcast.title} id={podcast._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
