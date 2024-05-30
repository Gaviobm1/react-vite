import PropTypes from "prop-types";
import Button from "../Button/Button";
import useDefaultStyle from "../../hooks/useDefaultStyle";

function Form({
  children,
  handleSubmit,
  buttonLabel = "Submit",
  ...delegated
}) {
  const defaultStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5em",
  };

  const style = useDefaultStyle(defaultStyle, delegated.style);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      style={style}
      {...delegated}
    >
      {children}
      <Button>{buttonLabel}</Button>
    </form>
  );
}

Form.propTypes = {
  children: PropTypes.any,
  handleSubmit: PropTypes.func,
  buttonLabel: PropTypes.any,
  defaultStyle: PropTypes.bool,
};

export default Form;
