import PropTypes from "prop-types";
import Label from "../Label/Label";
import useDefaultStyle from "../../hooks/useDefaultStyle";

function Input({ id, label, type = "text", ...delegated }) {
  const pattern = type === "email" ? "[^@\\s]+@[^@\\s]+\\.[^@\\s]+" : undefined;

  const defaultStyle = {
    padding: "0.5em",
    marginTop: "0.3em",
  };

  const style = useDefaultStyle(defaultStyle, delegated.style);

  return (
    <Label id={id}>
      {label}
      <input
        type={type}
        id={id}
        pattern={pattern}
        style={style}
        {...delegated}
      />
    </Label>
  );
}

Input.propTypes = {
  id: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
