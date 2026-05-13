import { Box, Container, Typography } from "@mui/material";

export default function ProjectDetail() {
  return (
    <Box component="section" sx={{ py: { xs: 10, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Project Details
        </Typography>
        <Typography variant="body1" color="text.secondary">
          This page will show the selected project details.
        </Typography>
      </Container>
    </Box>
  );
}
