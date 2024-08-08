import { Link } from "react-router-dom";
import CourseLink from "./CourseLink";
import { useState, useEffect } from "react";
import { getAllCourses } from "../../models/Course";

export default function CourseList() {
  const [courses, setCourses] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCourses();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCourses(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Courses not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Courses are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Course list</h1>
      {
        courses.map((course, index) => (
            <CourseLink key={index} name={course.title} id={course._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
