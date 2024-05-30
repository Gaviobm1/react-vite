import PropTypes from "prop-types";

function Heading({ level, children }) {
  if (level < 1 || level > 6) {
    throw new Error(`Expected: number 1-6. Recieved: ${level}`);
  }
  const Tag = `h${level}`;

  return <Tag>{children}</Tag>;
}

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any,
};

export default Heading;
