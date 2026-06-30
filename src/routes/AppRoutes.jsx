import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";

import HomePage from "../pages/Home/HomePage";
import Cv from "../pages/CV/Cv";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cv" element={<Cv />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;