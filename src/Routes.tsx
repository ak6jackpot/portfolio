import AboutPage from "pages/About";
import ContactPage from "pages/Contact";
import HomePage from "pages/Homepage";
import NotFound from "pages/NotFound";
import WorksPage from "pages/Works";
import React from "react";
import { useRoutes } from "react-router-dom";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "works",
      element: <WorksPage />,
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
