import { lazy, Suspense } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layout/MainLayout.jsx";


// =========================================
// Lazy Loaded Pages
// =========================================

const HomePage = lazy(() =>
  import("../pages/Home/Home.jsx")
);

const Cv = lazy(() =>
  import("../pages/CV/CV.jsx")
);

const ProjectDetails = lazy(() =>
  import("../pages/ProjectDetails/ProjectDetails")
);

const NotFound = lazy(() =>
  import("../pages/NotFount/NotFound.jsx")
);


// =========================================
// Loading Fallback
// =========================================

const PageLoader = () => {
  return (
    <div className="page-loader">
      Loading...
    </div>
  );
};


// =========================================
// Routes
// =========================================

const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Suspense fallback={<PageLoader />}>

        <Routes>

          <Route element={<MainLayout />}>

            <Route
              path="/"
              element={<HomePage />}
            />

            <Route
              path="/cv"
              element={<Cv />}
            />

            <Route
              path="/project/:id"
              element={<ProjectDetails />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Route>

        </Routes>

      </Suspense>

    </BrowserRouter>
  );
};

export default AppRoutes;