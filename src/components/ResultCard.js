import React from 'react';
import { Typography, Button, Paper } from '@mui/material';
import '../App.css';

const ResultCard = ({ questions, selectedAnswers, onRestart }) => {
  const score = selectedAnswers.reduce((acc, answer, index) =>
    answer === questions[index].answer ? acc + 1 : acc, 0);

  return (
    <Paper className="quiz-container" elevation={3}>
      <Typography variant="h5" className="result-title">Your Score: {score} / {questions.length}</Typography>
      {questions.map((q, index) => (
        <div key={index} className="review-card">
          <Typography className="question-text">{index + 1}. {q.question}</Typography>
          <Typography>
            Your Answer: <span className={selectedAnswers[index] === q.answer ? "result-correct" : "result-wrong"}>
              {selectedAnswers[index] || "Not Answered"}
            </span>
          </Typography>
          {selectedAnswers[index] !== q.answer && (
            <Typography>
              Correct Answer: <strong>{q.answer}</strong>
            </Typography>
          )}
        </div>
      ))}
      <Button variant="outlined" color="secondary" onClick={onRestart} sx={{ mt: 2 }}>
        Restart Quiz
      </Button>
    </Paper>
  );
};

export default ResultCard;
