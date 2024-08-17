import { Link } from "react-router-dom";
import AttendanceLink from "./AttendanceLink";
import { useState, useEffect } from "react";
import { getAllAttendances } from "../../models/Attendance";

export default function AttendanceList() {
  const [attendances, setAttendances] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllAttendances();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setAttendances(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Attendances not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Attendances are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Attendance list</h1>
      {
        attendances.map((attendance, index) => (
            <AttendanceLink key={index} name={attendance.studentName} id={attendance._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
