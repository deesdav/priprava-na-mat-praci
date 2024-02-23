import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import CatView from "./CatView/CatView";
import CatList from "./CatList/CatList";
import CatCreateForm from "./CatCreateForm/CatCreateForm";
import CatUpdateForm from "./CatUpdateForm/CatUpdateForm";
import CreatedCat from "./CatCreateForm/CreatedCat";

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
      </Routes>
    </BrowserRouter>
  );
}
