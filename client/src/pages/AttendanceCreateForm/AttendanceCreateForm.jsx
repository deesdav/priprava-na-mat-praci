import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createAttendance } from "../../models/Attendance";

export default function AttendanceCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const attendance = await createAttendance(formData);
    if (attendance.status === 201) {
      redirectToSuccessPage(attendance.payload._id);
    } else {
      setInfo(attendance.msg);
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
    return navigate(`/createdattendance/${id}`);
  };

  return (
    <>
      <h1>Attendance create form</h1>

      <form>
        <input
          type="text"
          required
          name="studentName"
          placeholder="Enter studentName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="status"
          placeholder="Enter status"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="notes"
          placeholder="Enter notes"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create attendance</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
