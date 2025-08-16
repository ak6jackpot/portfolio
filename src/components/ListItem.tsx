import React, { forwardRef } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  label?: string;
  description?: string;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "label" | "description";
  className?: string;
}

const ListItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      label = "",
      description = "",
      icon = <FontAwesomeIcon icon={faStar} color="white" size={"2xs"} />,
      size = "medium",
      variant = "label",
      className = "",
    },
    ref
  ) => {
    const sizeClasses = {
      small: "text-sm sm:text-base",
      medium: "text-base sm:text-lg",
      large: "text-lg sm:text-xl",
    };

    const descriptionSizeClasses = {
      small: "text-xs sm:text-sm",
      medium: "text-sm sm:text-base",
      large: "text-base sm:text-lg",
    };

    switch (variant) {
      case "label":
        return (
          <div
            ref={ref}
            className={`group flex items-center space-x-4 py-3 sm:py-4 border-b border-neutral-700/50 hover:border-neutral-600 transition-all duration-300 ${className}`}
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
              {icon}
            </div>

            {/* Label */}
            <span
              className={`font-medium text-neutral-200 group-hover:text-white transition-colors duration-300 ${sizeClasses[size]}`}
            >
              {label}
            </span>

            {/* Hover indicator */}
            <div className="flex-1 h-px bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/0 group-hover:via-violet-500/50 group-hover:to-violet-500/0 transition-all duration-300"></div>
          </div>
        );

      case "description":
        return (
          <div
            ref={ref}
            className={`group space-y-3 py-4 sm:py-6 border-b border-neutral-700/50 hover:border-neutral-600 transition-all duration-300 ${className}`}
          >
            {/* Header with icon and label */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-violet-400 group-hover:text-violet-300 transition-colors duration-300">
                {icon}
              </div>
              <h3
                className={`font-semibold text-neutral-100 group-hover:text-white transition-colors duration-300 ${sizeClasses[size]}`}
              >
                {label}
              </h3>
            </div>

            {/* Description */}
            <div className="pl-10">
              <p
                className={`text-neutral-400 group-hover:text-neutral-300 leading-relaxed transition-colors duration-300 ${descriptionSizeClasses[size]}`}
              >
                {description.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < description.split("\n").length - 1 && (
                      <br className="block sm:hidden" />
                    )}
                  </React.Fragment>
                ))}
              </p>
            </div>

            {/* Hover indicator */}
            <div className="pl-10">
              <div className="h-px bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-violet-500/0 group-hover:from-violet-500/0 group-hover:via-violet-500/50 group-hover:to-violet-500/0 transition-all duration-300"></div>
            </div>
          </div>
        );

      default:
        return null;
    }
  }
);

ListItem.displayName = "ListItem";

export default ListItem;
