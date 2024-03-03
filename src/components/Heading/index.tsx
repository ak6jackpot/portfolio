import React from "react";

const sizes = {
  "3xl": "text-[35px] font-bold",
  "2xl": "text-3xl font-bold leading-[38px]",
  xl: "text-[25px] font-bold leading-8",
  "5xl": "text-[50px] font-bold",
  "4xl": "text-[40px] font-bold leading-[51px]",
  s: "text-[17px] font-semibold",
  md: "text-lg font-bold leading-[23px]",
  "6xl": "text-[75px] font-bold leading-[80px]",
  xs: "text-[15px] font-bold",
  lg: "text-xl font-bold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-sourcesanspro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
