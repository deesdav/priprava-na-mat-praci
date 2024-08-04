import { Link, useParams, useNavigate } from "react-router-dom";
import { getProductById, deleteProduct } from "../../models/Product";
import { useEffect, useState } from "react";

export default function ProductView() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getProductById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setProduct(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === product.name) {
      const result = await deleteProduct(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong product name");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedproduct/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Product not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading product...</p>
      </>
    )
  }

  return (
    <>
      <h1>Product view</h1>
      <p className="productP">Product id: {id}</p>
      <p>Product name: {product.name}</p>
      <p>Product description: {product.description}</p>
      <p>Product price: {product.price}</p>
      <p>Product category: {product.category}</p>
      <form>
        <input type="text" placeholder={product.name} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete product</button>
        <p>{info}</p>
      </form>
      <Link to={`/updateproduct/${id}`}>
        <p>Update product</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
