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

      <Link to={"/createevent"}>
        <p className="linkToClick">Event create form</p>
      </Link>
      <Link to={"/events"}>
        <p className="linkToClick">Event list</p>
      </Link>

      <Link to={"/createproduct"}>
        <p className="linkToClick">Product create form</p>
      </Link>
      <Link to={"/products"}>
        <p className="linkToClick">Product list</p>
      </Link>

      <Link to={"/createreview"}>
        <p className="linkToClick">Review create form</p>
      </Link>
      <Link to={"/reviews"}>
        <p className="linkToClick">Review list</p>
      </Link>

      <Link to={"/createmusicalbum"}>
        <p className="linkToClick">Music Album create form</p>
      </Link>
      <Link to={"/musicalbums"}>
        <p className="linkToClick">Music Album list</p>
      </Link>

      <Link to={"/createsportteam"}>
        <p className="linkToClick">Sport team create form</p>
      </Link>
      <Link to={"/sportteams"}>
        <p className="linkToClick">Sport team list</p>
      </Link>

      <Link to={"/createplaylist"}>
        <p className="linkToClick">Playlist create form</p>
      </Link>
      <Link to={"/playlists"}>
        <p className="linkToClick">Playlist list</p>
      </Link>

      <Link to={"/createcourse"}>
        <p className="linkToClick">Course create form</p>
      </Link>
      <Link to={"/courses"}>
        <p className="linkToClick">Course list</p>
      </Link>

      <Link to={"/createcity"}>
        <p className="linkToClick">City create form</p>
      </Link>
      <Link to={"/cities"}>
        <p className="linkToClick">City list</p>
      </Link>

      <Link to={"/createattendance"}>
        <p className="linkToClick">Attendance create form</p>
      </Link>
      <Link to={"/attendances"}>
        <p className="linkToClick">Attendance list</p>
      </Link>

      <Link to={"/createcomment"}>
        <p className="linkToClick">Comment create form</p>
      </Link>
      <Link to={"/comments"}>
        <p className="linkToClick">Comment list</p>
      </Link>

      <Link to={"/createphoto"}>
        <p className="linkToClick">Photo create form</p>
      </Link>
      <Link to={"/photos"}>
        <p className="linkToClick">Photo list</p>
      </Link>

      <Link to={"/createvideogame"}>
        <p className="linkToClick">Videogame create form</p>
      </Link>
      <Link to={"/videogames"}>
        <p className="linkToClick">Videogame list</p>
      </Link>

      <Link to={"/createpodcast"}>
        <p className="linkToClick">Podcast create form</p>
      </Link>
      <Link to={"/podcasts"}>
        <p className="linkToClick">Podcast list</p>
      </Link>

      <Link to={"/createrestaurant"}>
        <p className="linkToClick">Restaurant create form</p>
      </Link>
      <Link to={"/restaurants"}>
        <p className="linkToClick">Restaurant list</p>
      </Link>

      <Link to={"/createprescription"}>
        <p className="linkToClick">Prescription create form</p>
      </Link>
      <Link to={"/prescriptions"}>
        <p className="linkToClick">Prescription list</p>
      </Link>
    </>
  );
}
