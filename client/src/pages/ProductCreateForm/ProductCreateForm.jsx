import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createProduct } from "../../models/Product";

export default function ProductCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const product = await createProduct(formData);
    if (product.status === 201) {
      redirectToSuccessPage(product.payload._id);
    } else {
      setInfo(product.msg);
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
    return navigate(`/createdproduct/${id}`);
  };

  return (
    <>
      <h1>Product create form</h1>

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
          name="description"
          placeholder="Enter description"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="price"
          placeholder="Enter price"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="category"
          placeholder="Enter category"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="stock"
          placeholder="Enter stock"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={handlePost}>Create product</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
