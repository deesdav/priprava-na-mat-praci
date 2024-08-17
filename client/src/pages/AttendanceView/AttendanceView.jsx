import { Link, useParams, useNavigate } from "react-router-dom";
import { getAttendanceById, deleteAttendance } from "../../models/Attendance";
import { useEffect, useState } from "react";

export default function AttendanceView() {
  const { id } = useParams();
  const [attendance, setAttendance] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getAttendanceById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setAttendance(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === attendance.studentName) {
      const result = await deleteAttendance(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong attendance student name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedattendance/${id}`);
  }


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
      <h1>Attendance view</h1>
      <p className="attendanceP">Attendance id: {id}</p>
      <p>Attendance studentName: {attendance.studentName}</p>
      <p>Attendance date: {attendance.date}</p>
      <p>Attendance status: {attendance.status}</p>
      <p>Attendance notes: {attendance.notes}</p>
      <form>
        <input type="text" placeholder={attendance.studentName} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete attendance</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateattendance/${id}`}>
        <p>Update attendance</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
