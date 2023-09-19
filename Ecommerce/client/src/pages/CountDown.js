import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date();
    const endTime = new Date(targetTime);
    const timeDiff = endTime - now;

    if (timeDiff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="countdown-timer">
      <h2>Limited Time Offer:</h2>
      <div className="timer">
        <div className="timer-unit">
          <span className="timer-value">{timeRemaining.hours}</span>
          <span className="timer-label">Hours</span>
        </div>
        <div className="timer-unit">
          <span className="timer-value">{timeRemaining.minutes}</span>
          <span className="timer-label">Minutes</span>
        </div>
        <div className="timer-unit">
          <span className="timer-value">{timeRemaining.seconds}</span>
          <span className="timer-label">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
