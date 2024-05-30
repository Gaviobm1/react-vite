import PropTypes from "prop-types";
import Button from "../Button/Button";
import useDefaultStyle from "../../hooks/useDefaultStyle";

function ButtonWithIcon({ children, icon: Icon, divStyle, iconStyle }) {
  const defaultStyleDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "hsl(231, 80%, 70%)",
    borderRadius: "5px",
  };

  const defaultStyleIcon = {
    padding: "0.2em",
  };

  const dStyle = useDefaultStyle(defaultStyleDiv, divStyle);
  const iStyle = useDefaultStyle(defaultStyleIcon, iconStyle);

  return (
    <Button>
      <div style={dStyle}>
        <Icon size={28} strokeWidth={1.5} style={iStyle} />
      </div>
      {children}
    </Button>
  );
}

ButtonWithIcon.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.any,
  divStyle: PropTypes.object,
  iconStyle: PropTypes.object,
};

export default ButtonWithIcon;
