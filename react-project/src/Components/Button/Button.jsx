import PropTypes from "prop-types";
import useDefaultStyle from "../../hooks/useDefaultStyle";

function Button({ children, handleClick, ...delegated }) {
  const defaultStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5em",
    borderRadius: "5px",
    padding: "0.3em",
    letterSpacing: "inherit",
    fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
    backgroundColor: "hsl(231, 100%, 30%)",
    color: "hsl(231, 100%, 95%)",
    border: "none",
    width: "fit-content",
    cursor: "pointer",
  };

  const style = useDefaultStyle(defaultStyle, delegated.style);

  return (
    <button onClick={handleClick} style={style} {...delegated}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
};

export default Button;
