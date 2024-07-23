import { Link, useParams, useNavigate } from "react-router-dom";
import { getBookById, deleteBook } from "../../models/Book";
import { useEffect, useState } from "react";

export default function BookView() {
  const { id } = useParams();
  const [book, setBook] = useState();
  const [loaded, setLoaded] = useState();
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const load = async () => {
    const data = await getBookById(id);
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      setBook(data.payload);
      setLoaded(true);
    }
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    if (formData === book.title) {
      const result = await deleteBook(id);
      if (result.status === 200) {
        redirect(id);
      } else {
        setInfo(result.msg);
      }
    } else {
      setInfo("Wrong book title");
    }
  }

  const handleChange = (e) => {
    setFormData(e.target.value);
  }

  const redirect = (id) => {
    return navigate(`/deletedbook/${id}`);
  }


  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Book not found</p>
      </>
    )
  }

  if (!loaded) {
    return (
      <>
        <p>Loading book...</p>
      </>
    )
  }

  return (
    <>
      <h1>Book view</h1>
      <p className="bookP">Book id: {id}</p>
      <p>Book title: {book.title}</p>
      <p>Book author: {book.author}</p>
      <p>Book published year: {book.publishedYear}</p>
      <p>Book pages: {book.pages}</p>
      <form>
        <input type="text" placeholder={book.title} onChange={handleChange}/>
        <button onClick={handleDelete}>Delete book</button>
        <p>{info}</p>
      </form>
      <Link to={`/updatebook/${id}`}>
        <p>Update book</p>
      </Link>
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
