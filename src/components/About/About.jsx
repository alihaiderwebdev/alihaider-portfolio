import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

import { personal } from "../../data/portfolio";
import "./About.css";

const highlights = [
  { id: "delivery", value: "40", suffix: "%", label: "Faster page delivery", note: "Automation and templates" },
  { id: "bugs", value: "25", suffix: "+", label: "UI bugs resolved", note: "Sprint cycles" },
  { id: "apis", value: "12", suffix: "+", label: "API endpoints built", note: "Auth and data" },
  { id: "dashboards", value: "3", suffix: "", label: "Role-based dashboards", note: "Admin, staff, users" },
];

const specialties = [
  {
    id: "architecture",
    icon: <CodeOutlinedIcon />,
    title: "Clean Architecture",
    desc: "Reusable components and scalable patterns.",
  },
  {
    id: "design",
    icon: <DesignServicesOutlinedIcon />,
    title: "Design to UI",
    desc: "Figma to production with responsive polish.",
  },
  {
    id: "performance",
    icon: <RocketLaunchOutlinedIcon />,
    title: "Performance",
    desc: "Fast loading, optimized UI, and accessibility.",
  },
];

const stack = [
  "React.js",
  "Material UI",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "JWT Auth",
];

const getInitials = (name = "") =>
  name.split(" ").slice(0, 2).map((p) => p[0]).join("").toUpperCase();

export default function About() {
  const name = personal?.name ?? "Ali Haider";
  const role = personal?.subtitle ?? "MERN Stack Developer";
  const location = personal?.location ?? "Pakistan";
  const initials = getInitials(name);

  return (
    <Box component="section" id="about" className="about-section">

      {/* Background */}
      <Box className="about-bg" aria-hidden="true">
        <Box className="about-bg__grid" />
        <Box className="about-bg__glow about-bg__glow--one" />
        <Box className="about-bg__glow about-bg__glow--two" />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

        {/* HEADER */}
        <Box className="about-header">
          <Typography component="span" className="section-eyebrow">
            About Me
          </Typography>

          <Typography variant="h2" className="section-title">
            Building scalable products <br />
            with <span className="section-title-accent">clean UI systems</span>
          </Typography>

          <Typography className="section-desc">
            I build MERN stack applications focused on performance, scalability, and clean UI architecture.
          </Typography>
        </Box>

        {/* GRID */}
        <Grid container spacing={4}>

          {/* LEFT */}
          <Grid item xs={12} md={6}>
            <Box className="about-left">

              {/* PROFILE */}
              <Box className="about-profile">
                <Box className="about-avatar">{initials}</Box>

                <Box className="about-profile__info">
                  <Typography className="about-name">{name}</Typography>
                  <Typography className="about-role">{role}</Typography>
                  <Typography className="about-location">{location}</Typography>
                </Box>

                <span className="about-status">
                  {personal?.available ? "Available" : "Open to Work"}
                </span>
              </Box>

              {/* DESCRIPTION */}
              <Box className="about-summary">
                <Typography className="about-paragraph">
                  I specialize in building modern React & MERN applications with clean architecture and reusable components.
                </Typography>

                <Typography className="about-paragraph">
                  My focus is on performance, responsive UI, and production-ready frontend systems.
                </Typography>
              </Box>

              {/* SPECIALTIES */}
              <Box className="about-specialties">
                {specialties.map((s) => (
                  <Box key={s.id} className="about-specialty">
                    <Box className="about-specialty__icon">{s.icon}</Box>
                    <Box>
                      <div className="about-specialty__title">{s.title}</div>
                      <div className="about-specialty__desc">{s.desc}</div>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* BUTTONS (UNCHANGED LOGIC) */}
              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                {personal?.links?.portfolio && (
                  <Button
                    href={personal.links.portfolio}
                    target="_blank"
                    className="about-btn about-btn--primary"
                    endIcon={<ArrowOutwardIcon />}
                  >
                    View Portfolio
                  </Button>
                )}

                {personal?.links?.github && (
                  <Button
                    href={personal.links.github}
                    target="_blank"
                    className="about-btn about-btn--secondary"
                    startIcon={<GitHubIcon />}
                  >
                    GitHub
                  </Button>
                )}

                {personal?.links?.linkedin && (
                  <Button
                    href={personal.links.linkedin}
                    target="_blank"
                    className="about-btn about-btn--secondary"
                    startIcon={<LinkedInIcon />}
                  >
                    LinkedIn
                  </Button>
                )}
              </Stack>

            </Box>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={6}>
            <Box className="about-right">

              {/* METRICS */}
              <Box className="about-metrics">
                {highlights.map((h) => (
                  <Box key={h.id} className="about-metric">
                    <div className="about-metric__value">
                      {h.value}{h.suffix}
                    </div>
                    <div className="about-metric__label">{h.label}</div>
                    <div className="about-metric__note">{h.note}</div>
                  </Box>
                ))}
              </Box>

              {/* STACK */}
              <Box className="about-stack">
                <span className="about-stack__label">Tech Stack</span>

                <Box className="about-stack__tags">
                  {stack.map((t) => (
                    <span key={t} className="about-tag">{t}</span>
                  ))}
                </Box>
              </Box>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}