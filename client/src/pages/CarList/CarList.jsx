import { Link } from "react-router-dom";
import CarLink from "./CarLink";
import { useState, useEffect } from "react";
import { getAllCars } from "../../models/Car";

export default function CarList() {
  const [cars, setCars] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCars();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCars(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Cars not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Cars are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Car list</h1>
      {
        cars.map((car, index) => (
            <CarLink key={index} name={car.brand} id={car._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
