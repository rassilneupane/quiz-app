import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import './App.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the chemical symbol for Water?",
    options: ["O2", "H2O", "CO2", "NaCl"],
    answer: "H2O"
  },
  {
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (answer) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answer;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  return (
    <Container maxWidth="sm">
      <Box className="app-box">
        <Typography variant="h4" className="main-title">Quiz App</Typography>
        {showResults ? (
          <ResultCard questions={questions} selectedAnswers={selectedAnswers} onRestart={handleRestart} />
        ) : (
          <>
            <QuestionCard
              question={questions[currentQuestion].question}
              options={questions[currentQuestion].options}
              correctAnswer={questions[currentQuestion].answer}
              selectedAnswer={selectedAnswers[currentQuestion]}
              handleSelect={handleSelect}
            />
            {selectedAnswers[currentQuestion] && (
              <Box className="next-button-box">
                <Button variant="contained" color="primary" onClick={handleNext}>
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            )}
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
