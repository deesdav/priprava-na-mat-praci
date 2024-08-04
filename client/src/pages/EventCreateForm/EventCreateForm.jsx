import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createEvent } from "../../models/Event";

export default function EventCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const event = await createEvent(formData);
    if (event.status === 201) {
      redirectToSuccessPage(event.payload._id);
    } else {
      setInfo(event.msg);
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
    return navigate(`/createdevent/${id}`);
  };

  return (
    <>
      <h1>Event create form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="year"
          placeholder="Enter year"
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
        <button onClick={handlePost}>Create event</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
