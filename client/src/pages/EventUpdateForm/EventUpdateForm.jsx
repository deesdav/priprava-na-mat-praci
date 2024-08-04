import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateEvent, getEventById } from "../../models/Event";

export default function EventUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [event, setEvent] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getEventById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setEvent(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const event = await updateEvent(id, formData);
    if (event.status === 200) {
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
    return navigate(`/event/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Event not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading event...</p>
      </>
    );
  }

  return (
    <>
      <h1>Event update form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          defaultValue={event.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="year"
          placeholder="Enter year"
          defaultValue={event.year}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="location"
          placeholder="Enter location"
          defaultValue={event.location}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          defaultValue={event.description}
          onChange={(e) => handleChange(e)}
        />
      
      
        <button onClick={handlePost}>Update event</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
