import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  text?: string;
  icon?: Node;
  size?: "small" | "medium" | "large";
}

export default function ListItem({ ...props }: Props) {
  const {
    text = "",
    icon = <FontAwesomeIcon icon={faStar} color="white" size={"2xs"} />,
    size = "medium",
  } = props;

  return (
    <div className="flex flex-row items-center justify-center my-1">
      {icon}
      <span
        className={`font-urbanistNormal ml-2 ${
          size == "large"
            ? "md:text-xl text-lg"
            : size == "small"
            ? "md:text-lg text-sm"
            : ""
        }`}
      >
        {text}
      </span>
    </div>
  );
}
