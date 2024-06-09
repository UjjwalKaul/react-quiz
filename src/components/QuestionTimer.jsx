import React, { useEffect, useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log('Setting timeout');
    setTimeout(onTimeout, timeout);
  }, [onTimeout, timeout]);

  useEffect(() => {
    console.log('Setting interval');
    setInterval(() => {
      setRemainingTime((prevTime) => {
        return prevTime - 100;
      });
    }, 100);
  }, []);

  return (
    <progress max={timeout} value={remainingTime} className="question-time" />
  );
}
