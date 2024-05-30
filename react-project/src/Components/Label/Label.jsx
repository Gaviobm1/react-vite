import PropTypes from "prop-types";
import useDefaultStyle from "../../hooks/useDefaultStyle";

function Label({ children, id, ...delegated }) {
  const defaultStyle = {
    userSelect: "none",
    display: "flex",
    flexDirection: "column",
  };

  const style = useDefaultStyle(defaultStyle, delegated.style);

  return (
    <label htmlFor={id} style={style} {...delegated}>
      {children}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any,
  delegated: PropTypes.any,
};

export default Label;
