import "./MainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
    <h1>Server & Client</h1>
      <Link to={"/createcat"}>
        <p className="linkToClick">Cat create form</p>
      </Link>
      <Link to={"/cats"}>
        <p className="linkToClick">Cat list</p>
      </Link>

      <Link to={"/createtask"}>
        <p className="linkToClick">Task create form</p>
      </Link>
      <Link to={"/tasks"}>
        <p className="linkToClick">Task list</p>
      </Link>

      <Link to={"/createdog"}>
        <p className="linkToClick">Dog create form</p>
      </Link>
      <Link to={"/dogs"}>
        <p className="linkToClick">Dog list</p>
      </Link>

      <Link to={"/createbook"}>
        <p className="linkToClick">Book create form</p>
      </Link>
      <Link to={"/books"}>
        <p className="linkToClick">Book list</p>
      </Link>

      <Link to={"/createcar"}>
        <p className="linkToClick">Car create form</p>
      </Link>
      <Link to={"/cars"}>
        <p className="linkToClick">Car list</p>
      </Link>

      <Link to={"/createmovie"}>
        <p className="linkToClick">Movie create form</p>
      </Link>
      <Link to={"/movies"}>
        <p className="linkToClick">Movie list</p>
      </Link>

      <Link to={"/createemployee"}>
        <p className="linkToClick">Employee create form</p>
      </Link>
      <Link to={"/employees"}>
        <p className="linkToClick">Employee list</p>
      </Link>

    </>
  );
}
