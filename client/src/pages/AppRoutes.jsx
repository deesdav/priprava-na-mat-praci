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

      </Routes>
    </BrowserRouter>
  );
}
