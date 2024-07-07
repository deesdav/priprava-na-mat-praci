import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createDog } from "../../models/Dog";

export default function DogCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const dog = await createDog(formData);
    if (dog.status === 201) {
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
    return navigate(`/createddog/${id}`);
  };

  return (
    <>
      <h1>Dog create form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="breed"
          placeholder="Enter breed"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="age"
          placeholder="Enter age"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="weight"
          placeholder="Enter weight"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create dog</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
