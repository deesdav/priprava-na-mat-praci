import { Link } from "react-router-dom";
import DogLink from "./DogLink";
import { useState, useEffect } from "react";
import { getAllDogs } from "../../models/Dog";

export default function DogList() {
  const [dogs, setDogs] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllDogs();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDogs(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Dogs not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Dogs are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Dog list</h1>
      {
        dogs.map((dog, index) => (
            <DogLink key={index} name={dog.name} id={dog._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
