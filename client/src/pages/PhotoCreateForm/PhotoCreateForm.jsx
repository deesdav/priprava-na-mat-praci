import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPhoto } from "../../models/Photo";

export default function PhotoCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const photo = await createPhoto(formData);
    if (photo.status === 201) {
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
    return navigate(`/createdphoto/${id}`);
  };

  return (
    <>
      <h1>Photo create form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="photographer"
          placeholder="Enter photographer"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="location"
          placeholder="Enter location"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create photo</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
