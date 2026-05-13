import { Box, Button, Container, Stack, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { personal } from "../../data/portfolio";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Box component="section" id="contact" className="ct-section">

      <Container maxWidth="lg">

        {/* HEADER */}
        <Box className="ct-header">
          <Typography className="ct-eyebrow">CONTACT</Typography>

          <Typography className="ct-title">
            Let’s build something
            <span> meaningful together</span>
          </Typography>

          <Typography className="ct-subtitle">
            Available for freelance, full-time & collaborations.
            Let’s discuss your idea.
          </Typography>
        </Box>

        {/* MAIN GRID */}
        <Box className="ct-grid">

          {/* LEFT PANEL */}
          <Box className="ct-card">

            <Box className="ct-status">
              <span className="ct-dot" />
              Available for work
            </Box>

            <Box className="ct-info">
              <div>
                <span>Location</span>
                <p>
                  <LocationOnOutlinedIcon /> Lahore, Pakistan
                </p>
              </div>

              <div>
                <span>Local Time</span>
                <p>{time} PKT</p>
              </div>
            </Box>

            <Box className="ct-tags">
              <span>Remote</span>
              <span>Freelance</span>
              <span>Full-time</span>
            </Box>

          </Box>

          {/* RIGHT PANEL */}
          <Box className="ct-main">

            {/* EMAIL CARD */}
            <Box className="ct-emailCard">

              <div className="ct-emailTop">
                <span>Primary Email</span>

                <button onClick={handleCopy}>
                  {copied ? (
                    <>
                      <CheckIcon /> Copied
                    </>
                  ) : (
                    <>
                      <ContentCopyOutlinedIcon /> Copy
                    </>
                  )}
                </button>
              </div>

              <a href={`mailto:${personal.email}`} className="ct-email">
                <EmailOutlinedIcon />
                {personal.email}
                <ArrowOutwardIcon />
              </a>

            </Box>

            {/* SOCIALS */}
            <Box className="ct-socials">

              <a href={personal.links.linkedin}>
                <LinkedInIcon /> LinkedIn
              </a>

              <a href={personal.links.github}>
                <GitHubIcon /> GitHub
              </a>

              <a href={personal.links.portfolio}>
                <LanguageIcon /> Portfolio
              </a>

              <a href={`tel:${personal.phone}`}>
                <CallOutlinedIcon /> Call
              </a>

            </Box>

          </Box>

        </Box>

      </Container>
    </Box>
  );
}