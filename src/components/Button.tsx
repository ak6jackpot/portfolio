import React from "react";
import { Sentry } from "react-activity";
import "react-activity/dist/Sentry.css";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[10px]",
} as const;
const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    red_300: "bg-red-300 shadow-sm",
    cyan_400: "bg-cyan-400 shadow-md",
    lime_800: "bg-lime-800 shadow-lg",
    red_400_01: "bg-red-400_01",
    green_600: "bg-green-600 shadow-3xl text-white-A700",
  },
  outline: {
    black_900: "border-black-900 border-[3px] border-solid text-black-900",
  },
} as const;
const sizes = {
  lg: "h-[68px] px-[26px]",
  sm: "h-[50px] px-[35px] text-xl",
  md: "h-[67px] px-[35px] text-base",
  xs: "h-[46px] px-[11px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    loading: boolean;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "xs",
  color = "black_900",
  loading = false,
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant &&
          variants[variant]?.[
            color as keyof (typeof variants)[typeof variant]
          ]) ||
        ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {loading ? <Sentry /> : children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
