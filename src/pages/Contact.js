import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        maxWidth: 600,
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
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
        We'd love to hear from you! Whether you have a suggestion, a bug to report, or just want to say hi — we're here to help.
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
        Email:{" "}
        <Link
          href="mailto:quizmaster.app@gmail.com"
          underline="hover"
          color="primary"
        >
          quizmaster.app@gmail.com
        </Link>
        <br />
        Instagram:{" "}
        <Link
          href="https://instagram.com/quizmasterapp"
          target="_blank"
          rel="noopener"
          underline="hover"
          color="primary"
        >
          @quizmasterapp
        </Link>
        <br />
        Facebook:{" "}
        <Link
          href="https://facebook.com/QuizMasterApp"
          target="_blank"
          rel="noopener"
          underline="hover"
          color="primary"
        >
          QuizMaster App
        </Link>
        <br />
        YouTube:{" "}
        <Link
          href="https://youtube.com/QuizMasterChannel"
          target="_blank"
          rel="noopener"
          underline="hover"
          color="primary"
        >
          QuizMaster Channel
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}>
        We'll get back to you as soon as possible. Thanks for being a part of our quiz-loving community!
      </Typography>
    </Box>
  );
}

export default Contact;
  