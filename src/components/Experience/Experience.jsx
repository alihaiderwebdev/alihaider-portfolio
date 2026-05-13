import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { education, experience } from "../../data/portfolio";
import "./Experience.css";

export default function Experience() {
  const roleCount = experience?.length ?? 0;
  const eduCount = education?.length ?? 0;
  const remoteCount =
    experience?.filter((item) => item.type === "Remote").length ?? 0;

  return (
    <Box component="section" id="experience" className="experience-section">
      <Box className="experience-bg" aria-hidden="true">
        <Box className="experience-bg__grid" />
        <Box className="experience-bg__glow experience-bg__glow--one" />
        <Box className="experience-bg__glow experience-bg__glow--two" />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* HEADER */}
        <Box className="experience-header">
          <Typography component="span" className="section-eyebrow">
            Experience
          </Typography>

          <Typography variant="h2" className="section-title">
            Career timeline &
            <span className="section-title-accent"> education</span>
          </Typography>

          <Typography component="p" className="section-desc">
            Hands-on experience across real-world projects, paired with academic
            milestones and continuous learning.
          </Typography>
        </Box>

        {/* STATS */}
        <Box className="experience-stats">
          <Box className="experience-stat">
            <span className="experience-stat__value">{roleCount}</span>
            <span className="experience-stat__label">Roles</span>
          </Box>

          <Box className="experience-stat">
            <span className="experience-stat__value">{eduCount}</span>
            <span className="experience-stat__label">Education</span>
          </Box>

          <Box className="experience-stat">
            <span className="experience-stat__value">{remoteCount}</span>
            <span className="experience-stat__label">Remote</span>
          </Box>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }} className="experience-grid">
          {/* EXPERIENCE */}
          <Grid item xs={12} md={7} className="experience-column">
            <Box className="experience-column__header">
              <WorkOutlineIcon className="experience-column__icon" />
              <Typography className="experience-column__title">
                Professional Experience
              </Typography>
            </Box>

            <Stack spacing={2} className="experience-list">
              {experience.map((item) => (
                <Box
                  key={`${item.role}-${item.company}-${item.period}`}
                  className="experience-card"
                >
                  <Box className="experience-card__top">
                    <Box>
                      <Typography className="experience-card__role">
                        {item.role}
                      </Typography>

                      <Typography className="experience-card__company">
                        {item.company}
                      </Typography>
                    </Box>

                    <Chip
                      label={item.type}
                      size="small"
                      className={`experience-card__chip experience-card__chip--${
                        item.type === "Remote" ? "remote" : "onsite"
                      }`}
                    />
                  </Box>

                  <Box className="experience-card__meta">
                    <span>
                      <LocationOnOutlinedIcon />
                      {item.location}
                    </span>

                    <span>
                      <CalendarMonthOutlinedIcon />
                      {item.period}
                    </span>
                  </Box>

                  <ul className="experience-card__bullets">
                    {item.bullets.map((bullet, index) => (
                      <li key={`${item.role}-${index}`}>{bullet}</li>
                    ))}
                  </ul>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* EDUCATION */}
          <Grid item xs={12} md={5} className="experience-column">
            <Box className="experience-column__header">
              <SchoolOutlinedIcon className="experience-column__icon" />
              <Typography className="experience-column__title">
                Education
              </Typography>
            </Box>

            <Stack spacing={2} className="education-list">
              {education.map((item) => (
                <Box
                  key={`${item.degree}-${item.institution}`}
                  className="education-card"
                >
                  <span className="education-card__year">{item.year}</span>

                  <Typography className="education-card__degree">
                    {item.degree}
                  </Typography>

                  <Typography className="education-card__school">
                    {item.institution}
                  </Typography>
                </Box>
              ))}
            </Stack>

            <Box className="experience-note">
              <span className="experience-note__label">Focus</span>
              <p>
                Building React-driven user interfaces with strong full-stack
                fundamentals and modern tooling.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}