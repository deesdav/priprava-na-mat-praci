import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPrescription } from "../../models/Prescription";

export default function PrescriptionCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const prescription = await createPrescription(formData);
    if (prescription.status === 201) {
      redirectToSuccessPage(prescription.payload._id);
    } else {
      setInfo(prescription.msg);
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
    return navigate(`/createdprescription/${id}`);
  };

  return (
    <>
      <h1>Prescription create form</h1>

      <form>
        <input
          type="text"
          required
          name="patient"
          placeholder="Enter patient"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="doctor"
          placeholder="Enter doctor"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="medication"
          placeholder="Enter medication"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="dosage"
          placeholder="Enter dosage"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="instructions"
          placeholder="Enter instructions"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create prescription</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
