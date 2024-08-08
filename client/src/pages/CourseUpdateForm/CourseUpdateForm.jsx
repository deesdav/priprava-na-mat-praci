import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateCourse, getCourseById } from "../../models/Course";

export default function CourseUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [course, setCourse] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCourseById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCourse(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const course = await updateCourse(id, formData);
    if (course.status === 200) {
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
    return navigate(`/course/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Course not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading course...</p>
      </>
    );
  }

  return (
    <>
      <h1>Course update form</h1>

      <form>
        <input
          type="text"
          required
          name="title"
          placeholder="Enter title"
          defaultValue={course.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          defaultValue={course.description}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="instructor"
          placeholder="Enter instructor"
          defaultValue={course.instructor}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="duration"
          placeholder="Enter duration"
          defaultValue={course.duration}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update course</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
