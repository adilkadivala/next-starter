import { useId } from "react";

export const Input = ({
  type = "text",
  name = "",
  onInput = () => {},
  className = "",
  placeholder = `Enter ${name}`,
  value = "",
}) => {
  const elementId = useId();

  return (
    <input
      type={type}
      name={name}
      id={elementId}
      onInput={onInput}
      className={className}
      placeholder={placeholder}
      value={value}
    />
  );
};
