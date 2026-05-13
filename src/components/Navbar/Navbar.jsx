import { useCallback, useEffect, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { personal } from "../../data/portfolio";
import { scrollToId } from "../../utils/scroll";
import "./Navbar.css";

const NAV_LINKS = [
  { id: "hero", label: "Home", num: "01" },
  { id: "skills", label: "Skills", num: "02" },
  { id: "projects", label: "Projects", num: "03" },
  { id: "experience", label: "Experience", num: "04" },
  { id: "about", label: "About", num: "05" },
  { id: "contact", label: "Contact", num: "06" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 12,
  });

  /** Smooth scroll to section with header offset */
  const scrollToSection = useCallback((e, id) => {
    e?.preventDefault();
    scrollToId(id);
    setActiveId(id);
    setOpen(false);
  }, [scrollToId]);

  /** Scroll-spy */
  useEffect(() => {
    const sections = NAV_LINKS
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /** Lock body scroll while drawer open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /** Close drawer on Escape */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const appBarStyles = useMemo(
    () => ({
      backdropFilter: trigger ? "blur(20px) saturate(180%)" : "blur(0px)",
      WebkitBackdropFilter: trigger ? "blur(20px) saturate(180%)" : "blur(0px)",
      backgroundColor: trigger ? "rgba(10, 12, 16, 0.72)" : "transparent",
      borderBottom: "1px solid",
      borderColor: trigger ? "rgba(28, 34, 48, 0.8)" : "transparent",
      boxShadow: trigger ? "0 4px 30px rgba(0, 0, 0, 0.3)" : "none",
      transition:
        "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
    }),
    [trigger]
  );

  return (
    <>
      {/* Skip link for accessibility */}
      <a
        href="#hero"
        className="navbar__skip"
        onClick={(e) => scrollToSection(e, "hero")}
      >
        Skip to content
      </a>

      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        component="nav"
        aria-label="Primary navigation"
        sx={appBarStyles}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              py: { xs: 1, md: 1.25 },
              gap: 2,
              minHeight: { xs: 64, md: 72 },
            }}
          >
            {/* Brand */}
            <Button
              component="a"
              href="#hero"
              onClick={(e) => scrollToSection(e, "hero")}
              className="navbar__logo"
              disableRipple
              aria-label="Ali Haider — Go to homepage"
            >
              <span className="navbar__logo-mark">AH</span>
              <span className="navbar__logo-text">
                Ali Haider
                <span className="navbar__logo-sub">Developer</span>
              </span>
            </Button>

            {/* Desktop Nav */}
            <Box
              component="ul"
              sx={{
                display: { xs: "none", md: "flex" },
                flex: 1,
                justifyContent: "center",
                gap: 0.25,
                listStyle: "none",
                m: 0,
                p: 0,
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Button
                    component="a"
                    href={`#${link.id}`}
                    onClick={(e) => scrollToSection(e, link.id)}
                    className={`navbar__link ${
                      activeId === link.id ? "navbar__link--active" : ""
                    }`}
                    disableRipple
                    aria-current={activeId === link.id ? "page" : undefined}
                  >
                    {/* <span className="navbar__link-num">{link.num}</span> */}
                    <span className="navbar__link-text">{link.label}</span>
                  </Button>
                </li>
              ))}
            </Box>

            {/* Desktop Actions */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {personal?.links?.github && (
                <Tooltip title="GitHub" arrow placement="bottom">
                  <IconButton
                    component="a"
                    href={personal.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View GitHub profile"
                    className="navbar__icon-btn"
                    size="small"
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              {personal?.links?.linkedin && (
                <Tooltip title="LinkedIn" arrow placement="bottom">
                  <IconButton
                    component="a"
                    href={personal.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View LinkedIn profile"
                    className="navbar__icon-btn"
                    size="small"
                  >
                    <LinkedInIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}

              <Box className="navbar__divider" aria-hidden="true" />

              <Button
                component="a"
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                variant="contained"
                className="navbar__cta"
                endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
              >
                Hire Me
              </Button>
            </Box>

            {/* Mobile Menu Toggle */}
            <IconButton
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              onClick={() => setOpen((prev) => !prev)}
              sx={{ display: { xs: "inline-flex", md: "none" }, ml: "auto" }}
              className="navbar__menu-btn"
              edge="end"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer */}
      <Drawer
        id="mobile-nav-drawer"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        keepMounted
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(5, 7, 12, 0.7)",
              backdropFilter: "blur(6px)",
            },
          },
          paper: {
            className: "navbar__drawer",
            elevation: 8,
          },
        }}
      >
        <Box
          sx={{
            width: 320,
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
        >
          {/* Drawer Header */}
          <Box className="navbar__drawer-header">
            <Box className="navbar__drawer-brand">
              <span className="navbar__logo-mark navbar__logo-mark--lg">AH</span>
              <Box>
                <Typography className="navbar__drawer-title">
                  Ali Haider
                </Typography>
                <Typography className="navbar__drawer-subtitle">
                  MERN Developer
                </Typography>
              </Box>
            </Box>
            <IconButton
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="navbar__drawer-close"
              size="small"
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Divider sx={{ borderColor: "rgba(28, 34, 48, 0.8)" }} />

          {/* Drawer Section Label */}
          <Box className="navbar__drawer-section-label">
          
            {/* <span className="navbar__drawer-line" /> */}
          </Box>

          {/* Drawer Links */}
          <List sx={{ flex: 1, px: 1.5, py: 1 }}>
            {NAV_LINKS.map((link) => (
              <ListItem key={link.id} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  component="a"
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  selected={activeId === link.id}
                  className="navbar__drawer-link"
                  aria-current={activeId === link.id ? "page" : undefined}
                >
                  {/* <span className="navbar__drawer-link-num">{link.num}</span> */}
                  <ListItemText
                    primary={link.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontSize: 15,
                          fontWeight: 600,
                          letterSpacing: "-0.01em",
                        },
                      },
                    }}
                  />
                  <ArrowOutwardIcon className="navbar__drawer-link-arrow" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ borderColor: "rgba(28, 34, 48, 0.8)" }} />

          {/* Drawer Footer */}
          <Box className="navbar__drawer-footer">
            <Button
              component="a"
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              variant="contained"
              fullWidth
              endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
              className="navbar__drawer-cta"
            >
              Hire Me
            </Button>

            <Box sx={{ display: "flex", gap: 1 }}>
              {personal?.links?.github && (
                <Button
                  component="a"
                  href={personal.links.github}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  fullWidth
                  startIcon={<GitHubIcon fontSize="small" />}
                  className="navbar__drawer-social"
                >
                  GitHub
                </Button>
              )}
              {personal?.links?.linkedin && (
                <Button
                  component="a"
                  href={personal.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  fullWidth
                  startIcon={<LinkedInIcon fontSize="small" />}
                  className="navbar__drawer-social"
                >
                  LinkedIn
                </Button>
              )}
            </Box>

            {personal?.email && (
              <Box className="navbar__drawer-email">
                <span className="navbar__drawer-email-label">Email</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="navbar__drawer-email-value"
                >
                  {personal.email}
                </a>
              </Box>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}