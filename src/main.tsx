import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./index.css";
import Navbar from "./components/navbar/Navbar";

//pages
import Home from "./pages/Homepage/Home";
import Recipes from "./pages/Recipes/Recipes";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import About from "./pages/AboutUs/Aboutus";

// Layout component to include ScrollToTop
const AppLayout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipes",
        element: <Recipes />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
