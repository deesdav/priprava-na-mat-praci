import { Link } from "react-router-dom";
import PhotoLink from "./PhotoLink";
import { useState, useEffect } from "react";
import { getAllPhotos } from "../../models/Photo";

export default function PhotoList() {
  const [photos, setPhotos] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllPhotos();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPhotos(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Photos not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Photos are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Photo list</h1>
      {
        photos.map((photo, index) => (
            <PhotoLink key={index} name={photo.title} id={photo._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
