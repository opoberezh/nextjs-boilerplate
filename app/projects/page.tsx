"use client"

import { Box, Pagination, Stack, Typography, Paper, Container, IconButton, useMediaQuery} from "@mui/material";
import Grid from "@mui/material/Grid2"; 
import { styled } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import projects from "../../projects.json";
import Link from "next/link";
import theme from "../theme";
import PieActiveArc from "../components/PieActiveArc";
import AdsClickIcon from '@mui/icons-material/AdsClick';


const StyledProjectCard = styled(Paper)(() => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  textAlign: "center",
  width: "300px",
  height: "300px",
  border: "3px solid #00ffcc",
  borderRadius: 12,
  boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2) ",
  transition: "transform 0.3s, box-shadow 0.3s",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    border: "none",
    transform: "scale(1.05)",
    boxShadow: "0 6px 12px rgba(0, 255, 204, 0.5)",
  },
  "&:hover .project-image": {
    opacity: 1,
  
  },
  [theme.breakpoints.up("lg")]: {
    width: "250px", 
    height: "250px", 
    padding: theme.spacing(1), 
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

const CornerBadge = styled(Box)({
  position: "absolute",
  bottom: 5,
  right: 5,
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "50%",
  padding: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  zIndex: 10,
});

function Projects() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"))
  const [page, setPage] = useState(1);
  const projectsPerPage = isDesktop ? 2 : 1;

  const indexOfLastProject = page * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    
      <Container
      
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 4, md: 13 },
        py: 3,
      }}
      >
      <Box
          sx={{
            borderRadius: "40px",
            width: "100%",
            maxWidth: "500px",
            boxShadow: "0 0 30px rgba(0, 255, 204, 0.8)",
          }}
        >
          <Image
            src="/assets/coding.png"
            alt="Coding apps"
            width={500}
            height={500}
            priority={true}
            className="responsiveImage"
            style={{ objectFit: "cover" }} 
          />
        </Box>
        <Box
         sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          textAlign: { xs: "center", md: "left" },
        }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
             
              color: "text.primary",
            }}
          >
            Projects
          </Typography>
          <Typography variant="h4"
          component="p"
          >
           Explore my latest projects below. Click on a project to view the code with visiting my GitHub page
          </Typography>
          <PieActiveArc/>
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
<CornerBadge>
<IconButton size="small" >
                          <AdsClickIcon />
                        </IconButton>
</CornerBadge>
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
  
  );
}

export default Projects;
