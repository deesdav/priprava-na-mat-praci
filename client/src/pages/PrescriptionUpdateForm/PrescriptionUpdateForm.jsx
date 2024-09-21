import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updatePrescription, getPrescriptionById } from "../../models/Prescription";

export default function PrescriptionUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [prescription, setPrescription] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPrescriptionById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPrescription(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const prescription = await updatePrescription(id, formData);
    if (prescription.status === 200) {
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
    return navigate(`/prescription/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Prescription not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading prescription...</p>
      </>
    );
  }

  return (
    <>
      <h1>Prescription update form</h1>

      <form>
        <input
          type="text"
          required
          name="patient"
          placeholder="Enter patient"
          defaultValue={prescription.patient}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="doctor"
          placeholder="Enter doctor"
          defaultValue={prescription.doctor}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="medication"
          placeholder="Enter medication"
          defaultValue={prescription.medication}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="dosage"
          placeholder="Enter dosage"
          defaultValue={prescription.dosage}
          onChange={(e) => handleChange(e)}
        />
         <input
          type="text"
          required
          name="instructions"
          placeholder="Enter instructions"
          defaultValue={prescription.instructions}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update prescription</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
