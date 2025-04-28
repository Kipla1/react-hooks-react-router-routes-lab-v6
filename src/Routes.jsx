import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { Route, BrowserRouter as Router, createBrowserRouter } from "react-router-dom";


function Routes() {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Routes >

        <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes> */}
      {[
        {
          path: "/",
          element: <Home />,
          errorElement: <ErrorPage />
        },
        {
          path: "/actors",
          element: <Actors />
        },
        {
          path: "/directors",
          element: <Directors />
        },
        {
          path: "/movie/:id",
          element: <Movie />
        }
      ]}
    </>
  );
}

export default Routes;