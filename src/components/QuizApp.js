import React, { useState } from "react";
import { Button, Typography, Box } from "@mui/material";

const questions = [
  {
    question: "What is 2 + 2?",
    options: ["1", "2", "3", "4"],
    answer: "4",
  },
  {
    question: "What color is the sky?",
    options: ["Blue", "Green", "Red", "Yellow"],
    answer: "Blue",
  },
  {
    question: "Which one is a fruit?",
    options: ["Carrot", "Apple", "Potato", "Onion"],
    answer: "Apple",
  },
];

export default function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  if (showScore) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h4" mb={2}>
          You scored {score} out of {questions.length}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleRestart}
        >
          Restart Quiz
        </Button>
      </Box>
    );
  }

  return (
    <Box
      maxWidth={400}
      margin="auto"
      mt={5}
      textAlign="center"
      padding={2}
      border="1px solid lightgray"
      borderRadius={2}
    >
      <Typography variant="h5" mb={2}>
        {questions[currentQuestion].question}
      </Typography>
      {questions[currentQuestion].options.map((option) => (
        <Button
          key={option}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mb: 1 }}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </Button>
      ))}
    </Box>
  );
}
