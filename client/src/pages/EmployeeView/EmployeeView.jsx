import { Link, useParams, useNavigate } from "react-router-dom";
import { getEmployeeById, deleteEmployee } from "../../models/Employee";
import { useEffect, useState } from "react";

export default function EmployeeView() {
  const { id } = useParams();
  const [employee, setEmployee] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getEmployeeById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setEmployee(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === employee.firstName) {
      const result = await deleteEmployee(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong employee first name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedemployee/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Employee not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading employee...</p>
      </>
    )
  }

  return (
    <>
      <h1>Employee view</h1>
      <p className="employeeP">Employee id: {id}</p>
      <p>Employee first name: {employee.firstName}</p>
      <p>Employee last name: {employee.lastName}</p>
      <p>Employee email: {employee.email}</p>
      <p>Employee position: {employee.position}</p>
      <p>Employee salary: {employee.salary}</p>
      <p>Employee department: {employee.department}</p>
      <form>
        <input type="text" placeholder={employee.firstName} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete employee</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateemployee/${id}`}>
        <p>Update employee</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
