import React from "react";
import PropTypes from "prop-types";
import Heading from "../Heading/Heading";
import { getCountdownTime } from "../../../helpers";
import useInterval from "../../hooks/useInterval";
import useToggle from "../../hooks/useToggle";
import useKeyEvent from "../../hooks/useKeyEvent";

function CountDown({ children, target, className }) {
  const [[days, hours, minutes, seconds], setTimeToGo] = React.useState([]);

  function countDownTime() {
    setTimeToGo(getCountdownTime(target));
  }

  useInterval(countDownTime, 1000);

  return (
    <div className={className}>
      <Heading level={2}>Countdown to {children}</Heading>
      <p>
        {days < 10 ? `0${days}` : days}:{hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </div>
  );
}

CountDown.propTypes = {
  children: PropTypes.any,
  target: PropTypes.string,
  className: PropTypes.string,
};

export default CountDown;
