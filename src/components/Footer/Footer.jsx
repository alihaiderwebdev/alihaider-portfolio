import { Box, Container, Typography } from "@mui/material";
import "./Footer.css";

export default function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg" className="footer__inner">
        <Typography className="footer__logo">Ali Haider</Typography>
        <Typography className="footer__text">
          Designed & built by <strong>Ali Haider</strong> · Lahore, Pakistan · {new Date().getFullYear()}
        </Typography>
        <Typography className="footer__stack">React.js · Node.js · MongoDB</Typography>
      </Container>
    </Box>
  );
}