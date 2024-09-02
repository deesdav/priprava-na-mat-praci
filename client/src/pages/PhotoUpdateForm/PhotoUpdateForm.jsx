import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePhoto, getPhotoById } from "../../models/Photo";

export default function PhotoUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [photo, setPhoto] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPhotoById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPhoto(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const photo = await updatePhoto(id, formData);
    if (photo.status === 200) {
      redirectToSuccessPage(photo.payload._id);
    } else {
      setInfo(photo.msg);
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
    return navigate(`/photo/${id}`);
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
      <h1>Photo update form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          defaultValue={photo.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="photographer"
          placeholder="Enter photographer"
          defaultValue={photo.photographer}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="location"
          placeholder="Enter location"
          defaultValue={photo.location}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          defaultValue={photo.description}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update photo</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
