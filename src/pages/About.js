import React from "react";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        maxWidth: 700,
        mx: "auto",
        mt: 4,
        bgcolor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        About QuizMaster
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
        Welcome to QuizMaster – your ultimate destination for fun, learning, and testing your knowledge! Whether you're a student preparing for exams, a trivia lover, or just want to challenge your brain, our quiz app offers a wide range of topics and levels to keep you engaged.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
        Built with React.js and Material UI, QuizMaster is fast, responsive, and user-friendly. You can take quizzes, view your scores in real-time, review your answers, and even restart to try again. We’re continuously updating the app to bring new features and questions.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
        At QuizMaster, we believe learning should be interactive and enjoyable. So dive in, test your knowledge, and become a quiz master!
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
        If you have ideas, feedback, or want to contribute, feel free to contact us anytime.
      </Typography>
    </Box>
  );
}

export default About;
