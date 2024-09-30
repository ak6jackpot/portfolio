import AboutPage from "pages/About";
import Amigo from "pages/Amigo";
import ContactPage from "pages/Contact";
import ExperiencePage from "pages/Experience";
import HomePage from "pages/Homepage";
import NFT from "pages/NFT";
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
    {
      path: "exp",
      element: <ExperiencePage />,
    },
    {
      path: "nft",
      element: <NFT />,
    },
    {
      path: "amigo",
      element: <Amigo />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
