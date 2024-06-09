import React from 'react';
import logoImage from '../assets/quiz-logo.png';
export default function Headerfg() {
  return (
    <header>
      <img src={logoImage} alt="Quiz Logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
