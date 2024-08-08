import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCourse } from "../../models/Course";

export default function CourseCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const course = await createCourse(formData);
    if (course.status === 201) {
      redirectToSuccessPage(course.payload._id);
    } else {
      setInfo(course.msg);
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
    return navigate(`/createdcourse/${id}`);
  };

  return (
    <>
      <h1>Course create form</h1>

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
          name="description"
          placeholder="Enter description"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="instructor"
          placeholder="Enter instructor"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="duration"
          placeholder="Enter duration"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create course</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
