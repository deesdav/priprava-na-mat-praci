import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateEmployee, getEmployeeById } from "../../models/Employee";

export default function EmployeeUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [employee, setEmployee] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getEmployeeById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setEmployee(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const employee = await updateEmployee(id, formData);
    if (employee.status === 200) {
      redirectToSuccessPage(employee.payload._id);
    } else {
      setInfo(employee.msg);
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
    return navigate(`/employee/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Employee not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading employee...</p>
      </>
    );
  }

  return (
    <>
      <h1>Employee update form</h1>

      <form>
        <input
          type="text"
          required
          name="firstName"
          placeholder="Enter first name"
          defaultValue={employee.firstName}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="lastName"
          placeholder="Enter last name"
          defaultValue={employee.lastName}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="email"
          placeholder="Enter email"
          defaultValue={employee.email}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="position"
          placeholder="Enter position"
          defaultValue={employee.position}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="salary"
          placeholder="Enter salary"
          defaultValue={employee.salary}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="department"
          placeholder="Enter department"
          defaultValue={employee.department}
          onChange={(e) => handleChange(e)}
        />
      
        <button onClick={handlePost}>Update employee</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
