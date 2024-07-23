import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createEmployee } from "../../models/Employee";

export default function EmployeeCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const employee = await createEmployee(formData);
    if (employee.status === 201) {
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
    return navigate(`/createdemployee/${id}`);
  };

  return (
    <>
      <h1>Employee create form</h1>

      <form>
      <input
          type="text"
          required
          name="firstName"
          placeholder="Enter first name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="lastName"
          placeholder="Enter last name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="email"
          placeholder="Enter email"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="position"
          placeholder="Enter position"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="salary"
          placeholder="Enter salary"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="department"
          placeholder="Enter department"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create employee</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
