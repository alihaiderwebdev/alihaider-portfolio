import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import BoltOutlinedIcon from "@mui/icons-material/BoltOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import "./Skills.css";

const primaryStack = [
  { label: "React.js", icon: <CodeOutlinedIcon /> },
  { label: "JavaScript ES6+", icon: <BoltOutlinedIcon /> },
  { label: "Node.js", icon: <HubOutlinedIcon /> },
  { label: "Express.js", icon: <RocketLaunchOutlinedIcon /> },
  { label: "MongoDB", icon: <StorageOutlinedIcon /> },
  { label: "Material UI", icon: <PaletteOutlinedIcon /> },
  { label: "REST APIs", icon: <HubOutlinedIcon /> },
  { label: "JWT Auth", icon: <LockOutlinedIcon /> },
  { label: "Git / GitHub", icon: <GitHubIcon /> },
  { label: "Vite", icon: <BoltOutlinedIcon /> },
  { label: "Responsive Design", icon: <PhoneIphoneOutlinedIcon /> },
  { label: "UI Engineering", icon: <LayersOutlinedIcon /> },
];

const skillGroups = [
  {
    icon: <CodeOutlinedIcon />,
    title: "Frontend Engineering",
    subtitle:
      "Building production-grade React interfaces with clean architecture.",
    items: [
      "React.js",
      "Hooks & State Patterns",
      "Component Architecture",
      "SPA Performance",
      "Clean Code",
    ],
    level: 92,
  },
  {
    icon: <PaletteOutlinedIcon />,
    title: "Design Systems",
    subtitle:
      "Creating scalable, consistent UI with modern component libraries.",
    items: [
      "Material UI",
      "Emotion CSS-in-JS",
      "Theme Tokens",
      "Typography Systems",
      "Responsive Grids",
    ],
    level: 88,
  },
  {
    icon: <PhoneIphoneOutlinedIcon />,
    title: "Responsive Design",
    subtitle: "Pixel-perfect interfaces across all devices and screen sizes.",
    items: [
      "Mobile-First",
      "Flexbox / Grid",
      "Breakpoint Strategy",
      "Cross-browser",
      "Performance",
    ],
    level: 90,
  },
  {
    icon: <HubOutlinedIcon />,
    title: "API Integration",
    subtitle:
      "Connecting frontends to backends with modern data patterns.",
    items: [
      "REST APIs",
      "Fetch / Axios",
      "JWT Authentication",
      "Error Handling",
      "Data Fetching",
    ],
    level: 85,
  },
  {
    icon: <BuildOutlinedIcon />,
    title: "Tools & Workflow",
    subtitle:
      "Streamlined development with modern tooling and best practices.",
    items: [
      "Vite",
      "ESLint / Prettier",
      "Git Flow",
      "npm Scripts",
      "Figma Handoff",
    ],
    level: 87,
  },
  {
    icon: <RocketLaunchOutlinedIcon />,
    title: "MERN Stack",
    subtitle:
      "Full-stack development from frontend React to Node.js backends.",
    items: [
      "MongoDB",
      "Express.js",
      "Mongoose ODM",
      "MVC Architecture",
      "Database Design",
    ],
    level: 82,
  },
];

export default function Skills() {
  return (
    <Box component="section" id="skills" className="skills-section">
      {/* Ambient background */}
      <Box className="skills-section__bg" aria-hidden="true">
        <Box className="skills-section__grid" />
        <Box className="skills-section__glow skills-section__glow--1" />
        <Box className="skills-section__glow skills-section__glow--2" />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box className="skills-header">
          <Typography component="span" className="section-eyebrow">
            What I Work With
          </Typography>
          <Typography variant="h2" className="section-title">
            Core Skills{" "}
            <span className="section-title-accent">& Stack</span>
          </Typography>
          <Typography component="p" className="section-desc">
            Production-focused React engineering with{" "}
            <strong>MERN stack</strong> expertise. I specialize in clean,
            scalable, and performant UI development.
          </Typography>
        </Box>

        {/* Primary Stack Showcase */}
        <Card className="skills-primary-stack" elevation={0}>
          <Box className="skills-primary__header">
            <Box className="skills-primary__meta">
              <span className="skills-primary__label">PRIMARY TECH STACK</span>
              <span className="skills-primary__line" />
            </Box>
            <Typography component="h3" className="skills-primary__title">
              Daily Driver Technologies
            </Typography>
            <Typography component="p" className="skills-primary__subtitle">
              The modern, production-grade tools I use every day to ship fast,
              reliable, and beautiful web experiences.
            </Typography>
          </Box>

          <Box className="skills-primary__tags">
            {primaryStack.map((tech, i) => (
              <Box
                key={tech.label}
                className={`skills-primary__tag animate-fade-up delay-${
                  (i % 6) + 1
                }`}
                title={tech.label}
              >
                <Box className="skills-primary__icon">{tech.icon}</Box>
                <span className="skills-primary__tag-label">{tech.label}</span>
              </Box>
            ))}
          </Box>
        </Card>

        {/* Skill Groups Grid */}
        <Box className="skills-grid-meta" aria-hidden="true">
          <span className="skills-grid-id">EXPERTISE / DOMAINS</span>
          <span className="skills-grid-line" />
        </Box>

        <Grid container spacing={{ xs: 2.5, md: 3 }} className="skills-grid">
          {skillGroups.map((group, i) => (
            <Grid item key={group.title} xs={12} sm={6} md={4}>
              <SkillCard group={group} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function SkillCard({ group, index }) {
  return (
    <Card
      className={`skill-card animate-fade-up delay-${(index % 6) + 1}`}
      elevation={0}
    >
      <CardContent sx={{ p: 0, height: "100%" }}>
        {/* Header with icon */}
        <Box className="skill-card__header">
          <Box className="skill-card__icon">{group.icon}</Box>
          <Box className="skill-card__num" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </Box>
        </Box>

        {/* Title + subtitle */}
        <Typography variant="h3" className="skill-card__title">
          {group.title}
        </Typography>
        <Typography component="p" className="skill-card__subtitle">
          {group.subtitle}
        </Typography>

        {/* Proficiency bar */}
        <Box className="skill-card__level">
          <Box className="skill-card__level-meta">
            <span className="skill-card__level-label">Proficiency</span>
            <span className="skill-card__level-val">{group.level}%</span>
          </Box>
          <Box className="skill-card__level-track">
            <Box
              className="skill-card__level-fill"
              sx={{ width: `${group.level}%` }}
            />
          </Box>
        </Box>

        {/* Tags */}
        <Box className="skill-card__tags">
          {group.items.map((item) => (
            <span key={item} className="skill-tag">
              {item}
            </span>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}