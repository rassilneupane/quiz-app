import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#1976d2",
        color: "white",
        textAlign: "center",
        py: 2,
        mt: 4,
      }}
    >
      <Typography variant="body2" gutterBottom>
        © {new Date().getFullYear()} Quiz Master. All rights reserved.
      </Typography>
      <Box>
        <IconButton
          color="inherit"
          href="https://www.instagram.com"
          target="_blank"
        >
          <Instagram />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.facebook.com"
          target="_blank"
        >
          <Facebook />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.youtube.com"
          target="_blank"
        >
          <YouTube />
        </IconButton>
      </Box>
    </Box>
  );
}
