import { Link } from "react-router-dom";
import TaskLink from "./TaskLink";
import { useState, useEffect } from "react";
import { getAllTasks } from "../../models/Task";

export default function TaskList() {
  const [tasks, setTasks] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllTasks();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTasks(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Tasks not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Tasks are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Task list</h1>
      {
        tasks.map((task, index) => (
            <TaskLink key={index} name={task.title} id={task._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
