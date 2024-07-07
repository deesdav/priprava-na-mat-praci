import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateTask, getTaskById } from "../../models/Task";

export default function TaskUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [task, setTask] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getTaskById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setTask(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const task = await updateTask(id, formData);
    if (task.status === 200) {
      redirectToSuccessPage(task.payload._id);
    } else {
      setInfo(task.msg);
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
    return navigate(`/task/${id}`);
  };

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
      <h1>Task update form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          defaultValue={task.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="descp"
          placeholder="Enter descp"
          defaultValue={task.descp}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="completed"
          placeholder="Enter completed"
          defaultValue={task.completed}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update task</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
