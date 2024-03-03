import React from "react";

const sizes = {
  xs: "text-[15px] font-normal leading-[19px]",
  lg: "text-[25px] font-normal leading-8",
  s: "text-lg font-normal leading-[30px]",
  md: "text-xl font-normal leading-[26px]",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "md",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-700 font-sourcesanspro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
