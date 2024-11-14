import { useId } from "react";

export const Button = ({
  onClick = () => {},
  type = "submit",
  className = "",
  children,
}) => {
  const elementId = useId();
  return (
    <button
      onClick={onClick}
      type={type}
      id={elementId}
      className={`${className} border border-slate-800 w-48 h-10 rounded-sm `}
    >
      {children}
    </button>
  );
};
