"use client"

import { Box, Pagination, Stack, Typography, Paper, Container } from "@mui/material";
import Grid from "@mui/material/Grid2"; 
import { styled } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import projects from "../../projects.json";
import Link from "next/link";
import theme from "../theme";

const StyledProjectCard = styled(Paper)(() => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  textAlign: "center",
  width: "300px",
  height: "300px",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(0, 255, 204, 0.5)",
  },
  "&:hover .project-image": {
    opacity: 1,
  },
}));

const ProjectImage = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "300px",
  height: "300px",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  m: 0,
});

function Projects() {
  const [page, setPage] = useState(1);
  const projectsPerPage = 2;

  const indexOfLastProject = page * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        p: 3,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, md: 10 },
        }}>
      <Box
          sx={{
            backgroundColor: "rgba(227, 228, 229, 0.5)",
            borderRadius: "50%",
            boxShadow: "0 0 30px #00ffcc",
            maxWidth: "592px",
          }}
        >
          <Image
            src="/assets/bro.png"
            alt="Astronaut explores object"
            width={592}
            height={592}
            priority={true}
            className="responsiveImage"
          />
        </Box>
        <Box
          sx={{
            
            textAlign: { xs: "center", md: "left" },
            minWidth: "300px",
            maxWidth: "1200px",
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              mb: 1,
              color: "text.primary",
            }}
          >
            Projects
          </Typography>
<Box 
>


        <Grid container spacing={4} justifyContent="center" >
          {currentProjects.map(({ id, url, src, alt, title, type, description, skills, role }) => (
            <Grid
              key={id}
              sx={{
                xs: 12, 
                sm: 12,
                md: 6,
              }}
            >
              <StyledProjectCard>
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ProjectImage className="project-image">
                    <Image
                      src={src}
                      alt={alt || `Image for ${title}`}
                      width={300}
                      height={300}
                    />
                  </ProjectImage>
                  <Typography variant="h5" fontWeight={700}>
                    {title}
                  </Typography>
                  <Typography variant="h5" fontWeight={500}>
                    {skills}
                  </Typography>
<Typography variant="h6" sx={{mt: 2}}>{description}</Typography>
<Typography variant="h6" fontStyle="italic" fontWeight={700}sx={{mt: 2}}>{type}</Typography>
<Typography variant="h6" sx={{mt: 2}}>{role}</Typography>

                </Link>
              </StyledProjectCard>
            </Grid>
          ))}
        </Grid>
        </Box>
       
        <Stack spacing={2} sx={{ alignItems: "center", mt: 2 }}>
          <Pagination
            count={Math.ceil(projects.length / projectsPerPage)}
            variant="outlined"
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
