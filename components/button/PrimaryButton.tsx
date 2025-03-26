import React, { ButtonHTMLAttributes } from "react";
interface IProps {
  sx?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
}
const PrimaryButton = ({ sx, className, children }: IProps) => {
  return (
    <>
      {/* <button
        className={`px-4 py-2 rounded-md font-bold  relative
          duration-300 ease-in-out text-white
          z-10
          bg-[url('/assets/arts/art_button.jpeg')] bg-cover bg-center
          border-2 border-transparent
          bg-clip-padding
          before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-gradient-r before:bg-gradient-100 before:bg-clip-padding
          hover:before:from-pink-500 hover:before:to-purple-500 hover:text-red
          ${className} `}
        {...sx}
      >
        {children}
      </button> */}

      <button
        type="button"
        className="transtion group flex h-12 w-36 items-center justify-center rounded-md  bg-gradient-100 p-[2px] text-white duration-300 "
        {...sx}
      >
        <div
          className={`flex h-full w-full items-center justify-center rounded-md  transition duration-300 ease-in-out bg-[url('/assets/arts/art_button.jpeg')] group-hover:transition group-hover:duration-300 group-hover:ease-in-out bg-cover bg-center ${className} `}
        >
          {children}
        </div>
      </button>
    </>
  );
};

export default PrimaryButton;
