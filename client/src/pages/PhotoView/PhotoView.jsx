import { Link, useParams, useNavigate } from "react-router-dom";
import { getPhotoById, deletePhoto } from "../../models/Photo";
import { useEffect, useState } from "react";

export default function PhotoView() {
  const { id } = useParams();
  const [photo, setPhoto] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPhotoById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPhoto(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === photo.title) {
      const result = await deletePhoto(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong photo title");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedphoto/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Photo not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading photo...</p>
      </>
    );
  }

  return (
    <>
      <h1>Photo view</h1>
      <p className="photoP">Photo id: {id}</p>
      <p>Photo title: {photo.title}</p>
      <p>Photo photographer: {photo.photographer}</p>
      <p>Photo uploadDate: {photo.uploadDate}</p>
      <p>Photo location: {photo.location}</p>
      <p>Photo descriptiont: {photo.description}</p>
      <form>
        <input type="text" placeholder={photo.title} onChange={handleChange} />
        <button onClick={handleDelete}>Delete photo</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatephoto/${id}`}>
        <p>Update photo</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
