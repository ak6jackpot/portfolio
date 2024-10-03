import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  label?: string;
  description?: string;
  icon?: Node;
  size?: "small" | "medium" | "large";
  variant?: "label" | "description";
}

export default function ListItem({ ...props }: Props) {
  const {
    label = "",
    description = "",
    icon = <FontAwesomeIcon icon={faStar} color="white" size={"2xs"} />,
    size = "medium",
    variant = "label",
  } = props;

  switch (variant) {
    case "label":
      return (
        <div className="flex flex-row items-center border-b-[1px] w-full justify-start py-2 md:py-4">
          {icon}
          <span
            className={`font-urbanistNormal text-neutral-300 ml-2 ${
              size == "large"
                ? "md:text-xl text-lg"
                : size == "small"
                ? "md:text-lg text-sm"
                : ""
            }`}
          >
            {label}
          </span>
        </div>
      );
    case "description":
      return (
        <div className="flex flex-col items-start justify-center border-b-[1px] py-4 w-full border-neutral-500">
          <span
            className={`font-urbanistNormal text-neutral-300 ${
              size == "large"
                ? "md:text-xl text-lg"
                : size == "small"
                ? "md:text-lg text-sm"
                : ""
            }`}
          >
            {label}
          </span>
          <span
            className={`font-urbanistNormal text-neutral-500 ${
              size == "large"
                ? "md:text-lg text-md"
                : size == "small"
                ? "md:text-sm text-xs"
                : ""
            }`}
          >
            {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br className="hidden md:block" />
              </React.Fragment>
            ))}
          </span>
        </div>
      );
  }
}
