import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { personal } from "../../data/portfolio";
import aliphoto from "../../assets/images/aliphoto.webp";
import { handleAnchorScroll } from "../../utils/scroll";
import "./Hero.css";

const TECH_STACK = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT",
];

const STATS = [
  { value: "4+", label: "Months Experience" },
  { value: "10+", label: "Projects Delivered" },
  { value: "2+", label: "Internships" },
];

export default function Hero() {
  return (
    <Box component="section" className="hero" id="hero">
      {/* Background Layer */}
      <Box className="hero__bg" aria-hidden="true">
        <Box className="hero__grid" />
        <Box className="hero__glow hero__glow--1" />
        <Box className="hero__glow hero__glow--2" />
        <Box className="hero__noise" />
      </Box>

      <Container maxWidth="lg" className="hero__inner">
        {/* ============ LEFT — CONTENT ============ */}
        <Box className="hero__content">
          {/* Status Badge */}
          <Box className="hero__status" role="status">
            <span className="hero__status-pulse" aria-hidden="true">
              <span className="hero__status-dot" />
            </span>
            <span className="hero__status-text">
              Available for new opportunities
            </span>
          </Box>

          {/* Headline */}
          <Typography variant="h1" className="hero__title">
            <span className="hero__title-eyebrow">Hi, I'm Ali Haider —</span>
            <span className="hero__title-main">
              MERN&nbsp;Stack
              <br />
              <span className="hero__title-accent">Developer</span>
            </span>
          </Typography>

          {/* Description */}
          <Typography component="p" className="hero__desc">
            I design and build <strong>fast, scalable, and accessible</strong>{" "}
            web applications with clean architecture and maintainable code —
            transforming complex requirements into seamless user experiences.
          </Typography>

          {/* Location */}
          <Box className="hero__meta">
            <LocationOnOutlinedIcon className="hero__meta-icon" />
            <span>Lahore, Pakistan</span>
            <span className="hero__meta-divider" />
            <span className="hero__meta-status">Open to remote work</span>
          </Box>

          {/* Tech Stack */}
          <Box className="hero__stack-wrap">
            <span className="hero__stack-label">TECH STACK</span>
            <Stack
              direction="row"
              flexWrap="wrap"
              className="hero__stack"
              spacing={0}
            >
              {TECH_STACK.map((tech) => (
                <Chip key={tech} label={tech} className="hero__chip" />
              ))}
            </Stack>
          </Box>

          {/* CTAs */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            className="hero__actions"
          >
            <Button
              component="a"
              href="#projects"
              onClick={(event) => handleAnchorScroll(event, "projects")}
              variant="contained"
              className="hero__btn hero__btn--primary"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
            >
              View My Work
            </Button>
            <Button
              component="a"
              href="#contact"
              onClick={(event) => handleAnchorScroll(event, "contact")}
              variant="outlined"
              className="hero__btn hero__btn--secondary"
            >
              Get in Touch
            </Button>
            {personal?.resumeUrl && (
              <Button
                component="a"
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer"
                variant="text"
                className="hero__btn hero__btn--ghost"
                startIcon={<FileDownloadOutlinedIcon sx={{ fontSize: 18 }} />}
              >
                Resume
              </Button>
            )}
          </Stack>

          {/* Stats */}
          <Box className="hero__stats" role="list">
            {STATS.map((stat, i) => (
              <Box key={stat.label} className="hero__stats-row">
                <Box className="hero__stat" role="listitem">
                  <span className="hero__stat-value">{stat.value}</span>
                  <span className="hero__stat-label">{stat.label}</span>
                </Box>
                {i < STATS.length - 1 && (
                  <span className="hero__stat-divider" aria-hidden="true" />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* ============ RIGHT — VISUAL ============ */}
        <Box className="hero__visual">
          <Box className="hero__visual-inner">
            {/* Frame Number */}
            <Box className="hero__frame-meta" aria-hidden="true">
              
              <span className="hero__frame-line" />
            </Box>

            {/* Image Card */}
            <Box className="hero__card">
              <Box className="hero__card-corners" aria-hidden="true">
                <span className="corner corner--tl" />
                <span className="corner corner--tr" />
                <span className="corner corner--bl" />
                <span className="corner corner--br" />
              </Box>

              <Box className="hero__image-wrap">
                <img
                  src={aliphoto}
                  alt="Ali Haider, MERN Stack Developer"
                  className="hero__image"
                  loading="eager"
                />
                <Box className="hero__image-overlay" aria-hidden="true" />
              </Box>

              {/* Card Footer */}
              <Box className="hero__card-footer">
                <Box>
                  <Typography className="hero__card-name">
                    Ali Haider
                  </Typography>
                  <Typography className="hero__card-role">
                    Full-Stack Developer
                  </Typography>
                </Box>
                <Box className="hero__card-sig" aria-hidden="true">
                  <span>AH</span>
                </Box>
              </Box>
            </Box>

            {/* Floating Badge — Verified */}
            <Box className="hero__chip-float hero__chip-float--top">
              <VerifiedOutlinedIcon className="hero__chip-float-icon" />
              <Box>
                <span className="hero__chip-float-title">React Focused</span>
                <span className="hero__chip-float-sub">Modern UI engineering</span>
              </Box>
            </Box>

            {/* Floating Badge — Production */}
            <Box className="hero__chip-float hero__chip-float--bottom">
              <BoltOutlinedIcon className="hero__chip-float-icon" />
              <Box>
                <span className="hero__chip-float-title">Production-Ready</span>
                <span className="hero__chip-float-sub">Scalable & tested</span>
              </Box>
            </Box>

            {/* Decorative code snippet */}
            <Box className="hero__code" aria-hidden="true">
              <span className="hero__code-line">
                <span className="hero__code-token--keyword">const</span>{" "}
                <span className="hero__code-token--var">developer</span>{" "}
                <span className="hero__code-token--punct">=</span>{" "}
                <span className="hero__code-token--string">'Ali'</span>
                <span className="hero__code-token--punct">;</span>
              </span>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Scroll Indicator */}
      <Box
        component="a"
        href="#skills"
        onClick={(event) => handleAnchorScroll(event, "skills")}
        className="hero__scroll"
        aria-label="Scroll to next section"
      >
        <span className="hero__scroll-text">Scroll</span>
        <KeyboardArrowDownIcon className="hero__scroll-icon" />
      </Box>
    </Box>
  );
}