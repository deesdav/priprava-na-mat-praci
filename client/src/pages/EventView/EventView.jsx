import { Link, useParams, useNavigate } from "react-router-dom";
import { getEventById, deleteEvent } from "../../models/Event";
import { useEffect, useState } from "react";

export default function EventView() {
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getEventById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setEvent(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === event.title) {
      const result = await deleteEvent(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong event title");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedevent/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Event not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading event...</p>
      </>
    )
  }

  return (
    <>
      <h1>Event view</h1>
      <p className="eventP">Event id: {id}</p>
      <p>Event title: {event.title}</p>
      <p>Event year: {event.year}</p>
      <p>Event location: {event.location}</p>
      <p>Event description: {event.description}</p>
      <form>
        <input type="text" placeholder={event.title} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete event</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateevent/${id}`}>
        <p>Update event</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
