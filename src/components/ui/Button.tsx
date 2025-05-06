import React from "react";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  isActive?: boolean;
  icon?: React.ReactNode;
};
const Button = ({ title, isActive = true, onClick, icon }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${
          isActive ? "bg-black text-white " : "bg-white border text-black"
        } p-2 cursor-pointer rounded-xl font-semibold text-sm items-center  flex gap-2 `}
      >
        {title } {icon && <span>{icon}</span>}
      </button>
    </div>
  );
};

export default Button;
