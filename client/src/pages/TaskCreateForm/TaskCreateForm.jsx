import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createTask } from "../../models/Task";

export default function TaskCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const task = await createTask(formData);
    if (task.status === 201) {
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
    return navigate(`/createdtask/${id}`);
  };

  return (
    <>
      <h1>Task create form</h1>

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
          name="descp"
          placeholder="Enter descp"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="completed"
          placeholder="Enter completed"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create task</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
