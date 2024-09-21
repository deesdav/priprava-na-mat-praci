import { Link, useParams, useNavigate } from "react-router-dom";
import { getPrescriptionById, deletePrescription } from "../../models/Prescription";
import { useEffect, useState } from "react";

export default function PrescriptionView() {
  const { id } = useParams();
  const [prescription, setPrescription] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getPrescriptionById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPrescription(data.payload);
      setLoaded(true);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === prescription.patient) {
      const result = await deletePrescription(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong prescription patient");
    }
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const redirect = (id) => {
    return navigate(`/deletedprescription/${id}`);
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
      <h1>Prescription view</h1>
      <p className="prescriptionP">Prescription id: {id}</p>
      <p>Prescription patient: {prescription.patient}</p>
      <p>Prescription doctor: {prescription.doctor}</p>
      <p>Prescription medication: {prescription.medication}</p>
      <p>Prescription dosage: {prescription.dosage}</p>
      <p>Prescription instructions: {prescription.instructions}</p>
      <p>Prescription prescribedDate: {prescription.prescribedDate}</p>
      <form>
        <input type="text" placeholder={prescription.patient} onChange={handleChange} />
        <button onClick={handleDelete}>Delete prescription</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateprescription/${id}`}>
        <p>Update prescription</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
