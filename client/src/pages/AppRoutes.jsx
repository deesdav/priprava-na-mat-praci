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
        <Route path="/updatemusicalbum/:id" element={<MusicalbumUpdateForm />} />
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


      </Routes>
    </BrowserRouter>
  );
}
