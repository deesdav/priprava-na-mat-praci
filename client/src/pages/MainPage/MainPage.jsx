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
    </>
  );
}
