import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateProduct, getProductById } from "../../models/Product";

export default function ProductUpdateForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const [loaded, setLoaded] = useState();
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getProductById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setProduct(data.payload);
      setLoaded(true);
    }
  };

  const postForm = async () => {
    const product = await updateProduct(id, formData);
    if (product.status === 200) {
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
    return navigate(`/product/${id}`);
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Product not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Loading product...</p>
      </>
    );
  }

  return (
    <>
      <h1>Product update form</h1>

      <form>
        <input
          type="text"
          required
          name="name"
          placeholder="Enter name"
          defaultValue={product.name}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="description"
          placeholder="Enter description"
          defaultValue={product.description}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="price"
          placeholder="Enter price"
          defaultValue={product.price}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          required
          name="category"
          placeholder="Enter category"
          defaultValue={product.category}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          required
          name="stock"
          placeholder="Enter stock"
          defaultValue={product.stock}
          onChange={(e) => handleChange(e)}
        />

        <button onClick={handlePost}>Update product</button>
      </form>
      <p>{info}</p>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
