import React, { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('Setting timeout');
    const interval = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(interval);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log('Setting interval');
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 100;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      className={mode}
      max={timeout}
      value={remainingTime}
      id="question-time"
    />
  );
}
