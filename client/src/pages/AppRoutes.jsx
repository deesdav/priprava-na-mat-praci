import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";

import CatView from "./CatView/CatView";
import CatList from "./CatList/CatList";
import CatCreateForm from "./CatCreateForm/CatCreateForm";
import CatUpdateForm from "./CatUpdateForm/CatUpdateForm";
import CreatedCat from "./CatCreateForm/CreatedCat";
import CatDeleted from "./CatView/CatDeleted";

import TaskView from "./TaskView/TaskView";
import TaskList from "./TaskList/TaskList";
import TaskCreateForm from "./TaskCreateForm/TaskCreateForm";
import TaskUpdateForm from "./TaskUpdateForm/TaskUpdateForm";
import CreatedTask from "./TaskCreateForm/CreatedTask";
import TaskDeleted from "./TaskView/TaskDeleted";

import DogView from "./DogView/DogView";
import DogList from "./DogList/DogList";
import DogCreateForm from "./DogCreateForm/DogCreateForm";
import DogUpdateForm from "./DogUpdateForm/DogUpdateForm";
import CreatedDog from "./DogCreateForm/CreatedDog";
import DogDeleted from "./DogView/DogDeleted";

import BookView from "./BookView/BookView";
import BookList from "./BookList/BookList";
import BookCreateForm from "./BookCreateForm/BookCreateForm";
import BookUpdateForm from "./BookUpdateForm/BookUpdateForm";
import CreatedBook from "./BookCreateForm/CreatedBook";
import BookDeleted from "./BookView/BookDeleted";

import CarView from "./CarView/CarView";
import CarList from "./CarList/CarList";
import CarCreateForm from "./CarCreateForm/CarCreateForm";
import CarUpdateForm from "./CarUpdateForm/CarUpdateForm";
import CreatedCar from "./CarCreateForm/CreatedCar";
import CarDeleted from "./CarView/CarDeleted";

import MovieView from "./MovieView/MovieView";
import MovieList from "./MovieList/MovieList";
import MovieCreateForm from "./MovieCreateForm/MovieCreateForm";
import MovieUpdateForm from "./MovieUpdateForm/MovieUpdateForm";
import CreatedMovie from "./MovieCreateForm/CreatedMovie";
import MovieDeleted from "./MovieView/MovieDeleted";

import EmployeeView from "./EmployeeView/EmployeeView";
import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeCreateForm from "./EmployeeCreateForm/EmployeeCreateForm";
import EmployeeUpdateForm from "./EmployeeUpdateForm/EmployeeUpdateForm";
import CreatedEmployee from "./EmployeeCreateForm/CreatedEmployee";
import EmployeeDeleted from "./EmployeeView/EmployeeDeleted";

import EventView from "./EventView/EventView";
import EventList from "./EventList/EventList";
import EventCreateForm from "./EventCreateForm/EventCreateForm";
import EventUpdateForm from "./EventUpdateForm/EventUpdateForm";
import CreatedEvent from "./EventCreateForm/CreatedEvent";
import EventDeleted from "./EventView/EventDeleted";

import ProductView from "./ProductView/ProductView";
import ProductList from "./ProductList/ProductList";
import ProductCreateForm from "./ProductCreateForm/ProductCreateForm";
import ProductUpdateForm from "./ProductUpdateForm/ProductUpdateForm";
import CreatedProduct from "./ProductCreateForm/CreatedProduct";
import ProductDeleted from "./ProductView/ProductDeleted";

import ReviewView from "./ReviewView/ReviewView";
import ReviewList from "./ReviewList/ReviewList";
import ReviewCreateForm from "./ReviewCreateForm/ReviewCreateForm";
import ReviewUpdateForm from "./ReviewUpdateForm/ReviewUpdateForm";
import CreatedReview from "./ReviewCreateForm/CreatedReview";
import ReviewDeleted from "./ReviewView/ReviewDeleted";

import MusicalbumView from "./MusicalbumView/MusicalbumView";
import MusicalbumList from "./MusicalbumList/MusicalbumList";
import MusicalbumCreateForm from "./MusicalbumCreateForm/MusicalbumCreateForm";
import MusicalbumUpdateForm from "./MusicalbumUpdateForm/MusicalbumUpdateForm";
import CreatedMusicalbum from "./MusicalbumCreateForm/CreatedMusicalbum";
import MusicalbumDeleted from "./MusicalbumView/MusicalbumDeleted";

import SportteamView from "./SportteamView/SportteamView";
import SportteamList from "./SportteamList/SportteamList";
import SportteamCreateForm from "./SportteamCreateForm/SportteamCreateForm";
import SportteamUpdateForm from "./SportteamUpdateForm/SportteamUpdateForm";
import CreatedSportteam from "./SportteamCreateForm/CreatedSportteam";
import SportteamDeleted from "./SportteamView/SportteamDeleted";

import PlaylistView from "./PlaylistView/PlaylistView";
import PlaylistList from "./PlaylistList/PlaylistList";
import PlaylistCreateForm from "./PlaylistCreateForm/PlaylistCreateForm";
import PlaylistUpdateForm from "./PlaylistUpdateForm/PlaylistUpdateForm";
import CreatedPlaylist from "./PlaylistCreateForm/CreatedPlaylist";
import PlaylistDeleted from "./PlaylistView/PlaylistDeleted";

import CourseView from "./CourseView/CourseView";
import CourseList from "./CourseList/CourseList";
import CourseCreateForm from "./CourseCreateForm/CourseCreateForm";
import CourseUpdateForm from "./CourseUpdateForm/CourseUpdateForm";
import CreatedCourse from "./CourseCreateForm/CreatedCourse";
import CourseDeleted from "./CourseView/CourseDeleted";

import CityView from "./CityView/CityView";
import CityList from "./CityList/CityList";
import CityCreateForm from "./CityCreateForm/CityCreateForm";
import CityUpdateForm from "./CityUpdateForm/CityUpdateForm";
import CreatedCity from "./CityCreateForm/CreatedCity";
import CityDeleted from "./CityView/CityDeleted";

import AttendanceView from "./AttendanceView/AttendanceView";
import AttendanceList from "./AttendanceList/AttendanceList";
import AttendanceCreateForm from "./AttendanceCreateForm/AttendanceCreateForm";
import AttendanceUpdateForm from "./AttendanceUpdateForm/AttendanceUpdateForm";
import CreatedAttendance from "./AttendanceCreateForm/CreatedAttendance";
import AttendanceDeleted from "./AttendanceView/AttendanceDeleted";

import CommentView from "./CommentView/CommentView";
import CommentList from "./CommentList/CommentList";
import CommentCreateForm from "./CommentCreateForm/CommentCreateForm";
import CommentUpdateForm from "./CommentUpdateForm/CommentUpdateForm";
import CreatedComment from "./CommentCreateForm/CreatedComment";
import CommentDeleted from "./CommentView/CommentDeleted";

import PhotoView from "./PhotoView/PhotoView";
import PhotoList from "./PhotoList/PhotoList";
import PhotoCreateForm from "./PhotoCreateForm/PhotoCreateForm";
import PhotoUpdateForm from "./PhotoUpdateForm/PhotoUpdateForm";
import CreatedPhoto from "./PhotoCreateForm/CreatedPhoto";
import PhotoDeleted from "./PhotoView/PhotoDeleted";

import VideogameView from "./VideogameView/VideogameView";
import VideogameList from "./VideogameList/VideogameList";
import VideogameCreateForm from "./VideogameCreateForm/VideogameCreateForm";
import VideogameUpdateForm from "./VideogameUpdateForm/VideogameUpdateForm";
import CreatedVideogame from "./VideogameCreateForm/CreatedVideogame";
import VideogameDeleted from "./VideogameView/VideogameDeleted";

import PodcastView from "./PodcastView/PodcastView";
import PodcastList from "./PodcastList/PodcastList";
import PodcastCreateForm from "./PodcastCreateForm/PodcastCreateForm";
import PodcastUpdateForm from "./PodcastUpdateForm/PodcastUpdateForm";
import CreatedPodcast from "./PodcastCreateForm/CreatedPodcast";
import PodcastDeleted from "./PodcastView/PodcastDeleted";

import RestaurantView from "./RestaurantView/RestaurantView";
import RestaurantList from "./RestaurantList/RestaurantList";
import RestaurantCreateForm from "./RestaurantCreateForm/RestaurantCreateForm";
import RestaurantUpdateForm from "./RestaurantUpdateForm/RestaurantUpdateForm";
import CreatedRestaurant from "./RestaurantCreateForm/CreatedRestaurant";
import RestaurantDeleted from "./RestaurantView/RestaurantDeleted";

import PrescriptionView from "./PrescriptionView/PrescriptionView";
import PrescriptionList from "./PrescriptionList/PrescriptionList";
import PrescriptionCreateForm from "./PrescriptionCreateForm/PrescriptionCreateForm";
import PrescriptionUpdateForm from "./PrescriptionUpdateForm/PrescriptionUpdateForm";
import CreatedPrescription from "./PrescriptionCreateForm/CreatedPrescription";
import PrescriptionDeleted from "./PrescriptionView/PrescriptionDeleted";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/cat/:id" element={<CatView />} />
        <Route path="/cats" element={<CatList />} />
        <Route path="/createcat" element={<CatCreateForm />} />
        <Route path="/updatecat/:id" element={<CatUpdateForm />} />
        <Route path="/createdcat/:id" element={<CreatedCat />} />
        <Route path="/deletedcat/:id" element={<CatDeleted />} />

        <Route path="/task/:id" element={<TaskView />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/createtask" element={<TaskCreateForm />} />
        <Route path="/updatetask/:id" element={<TaskUpdateForm />} />
        <Route path="/createdtask/:id" element={<CreatedTask />} />
        <Route path="/deletedtask/:id" element={<TaskDeleted />} />

        <Route path="/dog/:id" element={<DogView />} />
        <Route path="/dogs" element={<DogList />} />
        <Route path="/createdog" element={<DogCreateForm />} />
        <Route path="/updatedog/:id" element={<DogUpdateForm />} />
        <Route path="/createddog/:id" element={<CreatedDog />} />
        <Route path="/deleteddog/:id" element={<DogDeleted />} />

        <Route path="/book/:id" element={<BookView />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/createbook" element={<BookCreateForm />} />
        <Route path="/updatebook/:id" element={<BookUpdateForm />} />
        <Route path="/createdbook/:id" element={<CreatedBook />} />
        <Route path="/deletedbook/:id" element={<BookDeleted />} />

        <Route path="/car/:id" element={<CarView />} />
        <Route path="/cars" element={<CarList />} />
        <Route path="/createcar" element={<CarCreateForm />} />
        <Route path="/updatecar/:id" element={<CarUpdateForm />} />
        <Route path="/createdcar/:id" element={<CreatedCar />} />
        <Route path="/deletedcar/:id" element={<CarDeleted />} />

        <Route path="/movie/:id" element={<MovieView />} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/createmovie" element={<MovieCreateForm />} />
        <Route path="/updatemovie/:id" element={<MovieUpdateForm />} />
        <Route path="/createdmovie/:id" element={<CreatedMovie />} />
        <Route path="/deletedmovie/:id" element={<MovieDeleted />} />

        <Route path="/employee/:id" element={<EmployeeView />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/createemployee" element={<EmployeeCreateForm />} />
        <Route path="/updateemployee/:id" element={<EmployeeUpdateForm />} />
        <Route path="/createdemployee/:id" element={<CreatedEmployee />} />
        <Route path="/deletedemployee/:id" element={<EmployeeDeleted />} />

        <Route path="/event/:id" element={<EventView />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/createevent" element={<EventCreateForm />} />
        <Route path="/updateevent/:id" element={<EventUpdateForm />} />
        <Route path="/createdevent/:id" element={<CreatedEvent />} />
        <Route path="/deletedevent/:id" element={<EventDeleted />} />

        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/createproduct" element={<ProductCreateForm />} />
        <Route path="/updateproduct/:id" element={<ProductUpdateForm />} />
        <Route path="/createdproduct/:id" element={<CreatedProduct />} />
        <Route path="/deletedproduct/:id" element={<ProductDeleted />} />

        <Route path="/review/:id" element={<ReviewView />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/createreview" element={<ReviewCreateForm />} />
        <Route path="/updatereview/:id" element={<ReviewUpdateForm />} />
        <Route path="/createdreview/:id" element={<CreatedReview />} />
        <Route path="/deletedreview/:id" element={<ReviewDeleted />} />

        <Route path="/musicalbum/:id" element={<MusicalbumView />} />
        <Route path="/musicalbums" element={<MusicalbumList />} />
        <Route path="/createmusicalbum" element={<MusicalbumCreateForm />} />
        <Route
          path="/updatemusicalbum/:id"
          element={<MusicalbumUpdateForm />}
        />
        <Route path="/createdmusicalbum/:id" element={<CreatedMusicalbum />} />
        <Route path="/deletedmusicalbum/:id" element={<MusicalbumDeleted />} />

        <Route path="/sportteam/:id" element={<SportteamView />} />
        <Route path="/sportteams" element={<SportteamList />} />
        <Route path="/createsportteam" element={<SportteamCreateForm />} />
        <Route path="/updatesportteam/:id" element={<SportteamUpdateForm />} />
        <Route path="/createdsportteam/:id" element={<CreatedSportteam />} />
        <Route path="/deletedsportteam/:id" element={<SportteamDeleted />} />

        <Route path="/playlist/:id" element={<PlaylistView />} />
        <Route path="/playlists" element={<PlaylistList />} />
        <Route path="/createplaylist" element={<PlaylistCreateForm />} />
        <Route path="/updateplaylist/:id" element={<PlaylistUpdateForm />} />
        <Route path="/createdplaylist/:id" element={<CreatedPlaylist />} />
        <Route path="/deletedplaylist/:id" element={<PlaylistDeleted />} />

        <Route path="/course/:id" element={<CourseView />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/createcourse" element={<CourseCreateForm />} />
        <Route path="/updatecourse/:id" element={<CourseUpdateForm />} />
        <Route path="/createdcourse/:id" element={<CreatedCourse />} />
        <Route path="/deletedcourse/:id" element={<CourseDeleted />} />

        <Route path="/city/:id" element={<CityView />} />
        <Route path="/cities" element={<CityList />} />
        <Route path="/createcity" element={<CityCreateForm />} />
        <Route path="/updatecity/:id" element={<CityUpdateForm />} />
        <Route path="/createdcity/:id" element={<CreatedCity />} />
        <Route path="/deletedcity/:id" element={<CityDeleted />} />

        <Route path="/attendance/:id" element={<AttendanceView />} />
        <Route path="/attendances" element={<AttendanceList />} />
        <Route path="/createattendance" element={<AttendanceCreateForm />} />
        <Route path="/updateattendance/:id" element={<AttendanceUpdateForm />} />
        <Route path="/createdattendance/:id" element={<CreatedAttendance />} />
        <Route path="/deletedattendance/:id" element={<AttendanceDeleted />} />

        <Route path="/comment/:id" element={<CommentView />} />
        <Route path="/comments" element={<CommentList />} />
        <Route path="/createcomment" element={<CommentCreateForm />} />
        <Route path="/updatecomment/:id" element={<CommentUpdateForm />} />
        <Route path="/createdcomment/:id" element={<CreatedComment />} />
        <Route path="/deletedcomment/:id" element={<CommentDeleted />} />

        <Route path="/photo/:id" element={<PhotoView />} />
        <Route path="/photos" element={<PhotoList />} />
        <Route path="/createphoto" element={<PhotoCreateForm />} />
        <Route path="/updatephoto/:id" element={<PhotoUpdateForm />} />
        <Route path="/createdphoto/:id" element={<CreatedPhoto />} />
        <Route path="/deletedphoto/:id" element={<PhotoDeleted />} />

        <Route path="/videogame/:id" element={<VideogameView />} />
        <Route path="/videogames" element={<VideogameList />} />
        <Route path="/createvideogame" element={<VideogameCreateForm />} />
        <Route path="/updatevideogame/:id" element={<VideogameUpdateForm />} />
        <Route path="/createdvideogame/:id" element={<CreatedVideogame />} />
        <Route path="/deletedvideogame/:id" element={<VideogameDeleted />} />

        <Route path="/podcast/:id" element={<PodcastView />} />
        <Route path="/podcasts" element={<PodcastList />} />
        <Route path="/createpodcast" element={<PodcastCreateForm />} />
        <Route path="/updatepodcast/:id" element={<PodcastUpdateForm />} />
        <Route path="/createdpodcast/:id" element={<CreatedPodcast />} />
        <Route path="/deletedpodcast/:id" element={<PodcastDeleted />} />

        <Route path="/restaurant/:id" element={<RestaurantView />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/createrestaurant" element={<RestaurantCreateForm />} />
        <Route path="/updaterestaurant/:id" element={<RestaurantUpdateForm />} />
        <Route path="/createdrestaurant/:id" element={<CreatedRestaurant />} />
        <Route path="/deletedrestaurant/:id" element={<RestaurantDeleted />} />

        <Route path="/prescription/:id" element={<PrescriptionView />} />
        <Route path="/prescriptions" element={<PrescriptionList />} />
        <Route path="/createprescription" element={<PrescriptionCreateForm />} />
        <Route path="/updateprescription/:id" element={<PrescriptionUpdateForm />} />
        <Route path="/createdprescription/:id" element={<CreatedPrescription />} />
        <Route path="/deletedprescription/:id" element={<PrescriptionDeleted />} />

      </Routes>
    </BrowserRouter>
  );
}
