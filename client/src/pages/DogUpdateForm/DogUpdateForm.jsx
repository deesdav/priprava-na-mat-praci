import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateDog, getDogById } from "../../models/Dog";

export default function DogUpdateForm() {
  const { id } = useParams();  
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [dog, setDog] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getDogById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setDog(data.payload);
      setLoaded(true);
    }
  }

  const postForm = async () => {
    const dog = await updateDog(id, formData);
    if (dog.status === 200) {
      redirectToSuccessPage(dog.payload._id);
    } else {
      setInfo(dog.msg);
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
    return navigate(`/dog/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Dog not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading dog...</p>
      </>
    )
  }

  return (
    <>
      <h1>Dog update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={dog.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="breed"
          placeholder="Enter breed"
          defaultValue={dog.breed}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="age"
          placeholder="Enter age"
          defaultValue={dog.age}
          onChange={(e) => handleChange(e)}
        />
          <input
          type="number"
          required
          name="weight"
          placeholder="Enter weight"
          defaultValue={dog.weight}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Update dog</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
