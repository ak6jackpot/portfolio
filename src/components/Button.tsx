import React from "react";
import { Sentry } from "react-activity";
import "react-activity/dist/Sentry.css";

const shapes = {
  circle: "rounded-full",
  round: "rounded-xl",
  square: "rounded-lg",
} as const;

const variants = {
  fill: {
    primary:
      "bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-neutral-800 text-white border border-neutral-600 hover:bg-neutral-700",
    success: "bg-green-600 text-white shadow-lg hover:shadow-xl",
    danger: "bg-red-600 text-white shadow-lg hover:shadow-xl",
    outline:
      "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
  },
  outline: {
    primary:
      "border-2 border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white",
    secondary:
      "border-2 border-neutral-600 text-neutral-300 hover:bg-neutral-600 hover:text-white",
  },
} as const;

const sizes = {
  xs: "h-10 px-4 text-sm",
  sm: "h-12 px-6 text-base",
  md: "h-14 px-8 text-lg",
  lg: "h-16 px-10 text-xl",
  xl: "h-20 px-12 text-2xl",
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
    disabled: boolean;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "sm",
  color = "primary",
  loading = false,
  disabled = false,
  ...restProps
}) => {
  const baseClasses =
    "relative overflow-hidden font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-violet-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  const buttonClasses = `${baseClasses} ${className} flex items-center justify-center text-center cursor-pointer ${
    (shape && shapes[shape]) || ""
  } ${(size && sizes[size]) || ""} ${
    (variant &&
      variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) ||
    ""
  }`;

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...restProps}
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-blue-600 to-amber-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center space-x-2">
        {!!leftIcon && !loading && (
          <span className="flex items-center justify-center">{leftIcon}</span>
        )}

        {loading ? (
          <div className="flex items-center space-x-2">
            <Sentry />
            <span>Loading...</span>
          </div>
        ) : (
          <span>{children}</span>
        )}

        {!!rightIcon && !loading && (
          <span className="flex items-center justify-center">{rightIcon}</span>
        )}
      </div>

      {/* Hover effect overlay - reduced glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-blue-600 to-violet-900 opacity-0 hover:opacity-5 transition-opacity duration-300"></div>
    </button>
  );
};

export { Button };
