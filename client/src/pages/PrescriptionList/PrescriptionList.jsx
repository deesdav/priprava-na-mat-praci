import { Link } from "react-router-dom";
import PrescriptionLink from "./PrescriptionLink";
import { useState, useEffect } from "react";
import { getAllPrescriptions } from "../../models/Prescription";

export default function PrescriptionList() {
  const [prescriptions, setPrescriptions] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllPrescriptions();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setPrescriptions(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Prescriptions not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Prescriptions are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Prescription list</h1>
      {prescriptions.map((prescription, index) => (
        <PrescriptionLink
          key={index}
          name={prescription.patient}
          id={prescription._id}
        />
      ))}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
