import { Link } from "react-router-dom";
import ProductLink from "./ProductLink";
import { useState, useEffect } from "react";
import { getAllProducts } from "../../models/Product";

export default function ProductList() {
  const [products, setProducts] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllProducts();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setProducts(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Products not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Products are loading</p>
      </>
    );
  }

  return (
    <>
      <h1>Product list</h1>
      {
        products.map((product, index) => (
            <ProductLink key={index} name={product.name} id={product._id} />
        ))
      }
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
