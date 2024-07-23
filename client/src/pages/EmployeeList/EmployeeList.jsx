import { Link } from "react-router-dom";
import EmployeeLink from "./EmployeeLink";
import { useState, useEffect } from "react";
import { getAllEmployees } from "../../models/Employee";

export default function EmployeeList() {
  const [employees, setEmployees] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllEmployees();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setEmployees(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Employees not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Employees are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Employee list</h1>
      {
        employees.map((employee, index) => (
            <EmployeeLink key={index} name={employee.firstName} id={employee._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
