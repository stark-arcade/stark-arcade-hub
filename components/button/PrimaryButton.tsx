import React, { ButtonHTMLAttributes } from "react";
interface IProps {
  sx?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
}
const PrimaryButton = ({ sx, className, children }: IProps) => {
  return (
    <button
      className={`px-4 py-2 bg-gradient-100 rounded-md font-bold ${className} `}
      {...sx}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
