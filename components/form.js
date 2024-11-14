import { useId } from "react";

export const Form = ({ method = "get", children, className = "" }) => {
  const elementId = useId();
  return (
    <form
      method={method}
      id={elementId}
      className={`${className} border border-slate-600 w-fit h-fit`}
    >
      {children}
    </form>
  );
};
