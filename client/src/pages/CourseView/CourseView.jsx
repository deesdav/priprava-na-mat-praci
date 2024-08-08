import { Link, useParams, useNavigate } from "react-router-dom";
import { getCourseById, deleteCourse } from "../../models/Course";
import { useEffect, useState } from "react";

export default function CourseView() {
  const { id } = useParams();
  const [course, setCourse] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getCourseById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCourse(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === course.title) {
      const result = await deleteCourse(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong course title");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedcourse/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Course not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading course...</p>
      </>
    )
  }

  return (
    <>
      <h1>Course view</h1>
      <p className="courseP">Spor tteam id: {id}</p>
      <p>Course title: {course.title}</p>
      <p>Course description: {course.description}</p>
      <p>Course instructor: {course.instructor}</p>
      <p>Course duration: {course.duration}</p>
      <form>
        <input type="text" placeholder={course.title} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete course</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatecourse/${id}`}>
        <p>Update course</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
