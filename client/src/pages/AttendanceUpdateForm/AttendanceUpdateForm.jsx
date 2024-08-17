import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateAttendance, getAttendanceById } from "../../models/Attendance";

export default function AttendanceUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [attendance, setAttendance] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getAttendanceById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setAttendance(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const attendance = await updateAttendance(id, formData);
    if (attendance.status === 200) {
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
    return navigate(`/attendance/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Attendance not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading attendance...</p>
      </>
    )
  }

  return (
    <>
      <h1>Attendance update form</h1>

      <form>
        <input
          type="text"
          required
          name="studentName"
          placeholder="Enter studentName"
          defaultValue={attendance.studentName}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="status"
          placeholder="Enter status"
          defaultValue={attendance.status}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="notes"
          placeholder="Enter notes"
          defaultValue={attendance.notes}
          onChange={(e) => handleChange(e)}
        />
         
        <button onClick={handlePost}>Update attendance</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
