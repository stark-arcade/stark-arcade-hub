import React from "react";

interface IProps {
  style?: React.CSSProperties;
  styleBorder?: React.CSSProperties;
  children?: React.ReactNode;
}

const GradientCard = ({ style, children, styleBorder }: IProps) => {
  return (
    <div
      className="relative rounded-2xl p-8 text-center bg-opacity-20 transition-all duration-300 hover:bg-opacity-40"
      style={{
        backgroundColor: "#18181B",
        ...style,
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-100"
        style={{
          WebkitMask:
            "linear-gradient(white 0 0) content-box, linear-gradient(white 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          ...styleBorder,
        }}
      ></div>
      {children}
    </div>
  );
};

export default GradientCard;
