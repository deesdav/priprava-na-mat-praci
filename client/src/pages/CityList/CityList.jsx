import { Link } from "react-router-dom";
import CityLink from "./CityLink";
import { useState, useEffect } from "react";
import { getAllCities } from "../../models/City";

export default function CityList() {
  const [cities, setCities] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllCities();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setCities(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Cities not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Cities are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>City list</h1>
      {
        cities.map((city, index) => (
            <CityLink key={index} name={city.name} id={city._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
