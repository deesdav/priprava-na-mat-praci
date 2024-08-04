import { Link } from "react-router-dom";
import EventLink from "./EventLink";
import { useState, useEffect } from "react";
import { getAllEvents } from "../../models/Event";

export default function EventList() {
  const [events, setEvents] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllEvents();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setEvents(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Events not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Events are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Event list</h1>
      {
        events.map((event, index) => (
            <EventLink key={index} name={event.title} id={event._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
