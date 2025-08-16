import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-8xl sm:text-9xl font-bold gradient-text animate-pulse">
            404
          </h1>

          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-blue-600/20 to-amber-500/20 rounded-full blur-3xl scale-150 -z-10"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Oops! We ran out of code
          </h2>
          <p className="text-lg text-neutral-300 max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the
            digital void. Don't worry, even the best developers get lost
            sometimes!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            size="md"
            className="border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Go Back
          </Button>

          <Button
            onClick={() => navigate("/")}
            size="md"
            className="bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 text-white hover:from-amber-500 hover:via-blue-600 hover:to-violet-900"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2" />
            Go Home
          </Button>
        </div>

        {/* Fun Fact */}
        <div className="mt-12 p-4 bg-neutral-800/50 rounded-xl border border-neutral-700/50">
          <p className="text-sm text-neutral-400">
            💡 Fun fact: The first 404 error was created in 1990 by Tim
            Berners-Lee while working on the World Wide Web at CERN.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
