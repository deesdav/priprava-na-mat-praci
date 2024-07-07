import { Link, useParams, useNavigate } from "react-router-dom";
import { getTaskById, deleteTask } from "../../models/Task";
import { useEffect, useState } from "react";

export default function TaskView() {
  const { id } = useParams();
  const [task, setTask] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTaskById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTask(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === task.title) {
      const result = await deleteTask(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong task title");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedtask/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Task not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading task...</p>
      </>
    )
  }

  return (
    <>
      <h1>Task view</h1>
      <p className="taskP">Task id: {id}</p>
      <p>Task title: {task.title}</p>
      <p>Task descp: {task.descp}</p>
      <p>Task completed: {task.completed}</p>
      <form>
        <input type="text" placeholder={task.title} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete task</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatetask/${id}`}>
        <p>Update task</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
