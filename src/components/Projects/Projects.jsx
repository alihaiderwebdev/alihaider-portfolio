import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { projects } from "../../data/portfolio";
import healthcareProject from "../../assets/images/healcareProject.webp";
import aluraReset from "../../assets/images/aluraReset.webp";
import "./Projects.css";

const projectImages = {
  1: healthcareProject,
  2: aluraReset,
};

export default function Projects() {
  return (
    <Box component="section" id="projects" className="projects-section">
      {/* Background */}
      <Box className="projects-section__bg" aria-hidden="true">
        <Box className="projects-section__grid" />
        <Box className="projects-section__glow projects-section__glow--1" />
        <Box className="projects-section__glow projects-section__glow--2" />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box className="projects-header">
          <Typography component="span" className="section-eyebrow">
            Selected Work
          </Typography>

          <Typography variant="h2" className="section-title">
            Featured <span className="section-title-accent">Projects</span>
          </Typography>

          <Typography component="p" className="section-desc">
            Real-world applications built with full-stack technologies.
          </Typography>
        </Box>

        {/* IMPORTANT: ONE COLUMN ONLY */}
        <Stack spacing={4} className="projects-stack">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function ProjectCard({ project, index }) {
  const projectImage = projectImages[project.id];
  const projectNum = String(index + 1).padStart(2, "0");

  return (
    <Card className="project-card" elevation={0}>
      <Box className="project-card__frame">

        {/* IMAGE SIDE */}
        <Box className="project-card__media">
          <span className="project-card__frame-id">
            {/* {projectNum} / PROJECT */}
          </span>

          {project.featured && (
            <span className="project-card__featured">Featured</span>
          )}

          {projectImage && (
            <img
              src={projectImage}
              alt={project.title}
              className="project-card__image"
            />
          )}
        </Box>

        {/* CONTENT SIDE */}
        <CardContent className="project-card__body">

          <Stack direction="row" justifyContent="space-between">
            <span className="project-card__badge">
              {project.badge}
            </span>

            {project.live && (
              <span className="project-card__live">Live</span>
            )}
          </Stack>

          <Typography variant="h4" className="project-card__title">
            {project.title}
          </Typography>

          <Typography className="project-card__desc">
            {project.description}
          </Typography>

          {/* STACK */}
          <Box className="project-card__stack">
            {project.stack.map((tech) => (
              <span key={tech} className="project-tag">
                {tech}
              </span>
            ))}
          </Box>

          {/* BUTTONS */}
          <Stack direction="row" spacing={2}>
            {project.live && (
              <Button
                href={project.live}
                target="_blank"
                className="project-btn primary"
                endIcon={<ArrowOutwardIcon />}
              >
                Live
              </Button>
            )}

            {project.github && (
              <Button
                href={project.github}
                target="_blank"
                className="project-btn secondary"
                startIcon={<GitHubIcon />}
              >
                Code
              </Button>
            )}
          </Stack>
        </CardContent>
      </Box>
    </Card>
  );
}