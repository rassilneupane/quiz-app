import React from 'react';
import { Typography, Button, Paper } from '@mui/material';
import '../App.css';

const QuestionCard = ({ question, options, correctAnswer, selectedAnswer, handleSelect }) => {
  return (
    <Paper className="quiz-container" elevation={3}>
      <Typography variant="h6" className="question-text">{question}</Typography>
      {options.map((option, index) => {
        const isSelected = selectedAnswer === option;
        const isCorrect = option === correctAnswer;
        let className = 'option-button';

        if (selectedAnswer) {
          if (isCorrect) className += ' correct';
          else if (isSelected && !isCorrect) className += ' incorrect';
        }

        return (
          <Button
            key={index}
            variant="contained"
            className={className}
            onClick={() => handleSelect(option)}
            disabled={!!selectedAnswer}
          >
            {option}
          </Button>
        );
      })}
    </Paper>
  );
};

export default QuestionCard;
