import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import About from "pages/About";
import Works from "pages/Works";
import Contact from "pages/Contact";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "works",
      element: <Works />,
    },
    {
      path: "contact",
      element: <Contact />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
