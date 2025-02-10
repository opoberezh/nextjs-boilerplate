"use client";
import Image from "next/image";
import React, { useState } from "react";

import BasicButton from "../components/BasicButton";
import ModalCard from "../components/ModalCard";
import { Box, Container, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Stack } from "@mui/material";
import GaugeComposition from "../components/GaugeComposition";
import { useTheme } from "@mui/material/styles";

function About() {
  const theme = useTheme();
  const colors = theme.palette.customColors.iconColors;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
          src="/assets/startup.png"
          alt="Startup life"
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
          Olha Poberezhna
        </Typography>

        <Typography variant="h4" component="p">
          As a junior front-end developer, I am excited to begin my career in
          the IT field, ready to apply my skills and continue learning
        </Typography>
        <Box sx={{ width: { xs: "100%", md: "400px" } }}>
          <Stack
            direction={{ xs: "row", md: "row" }}
            sx={{ alignItems: "center" }}
          >
            <GaugeComposition value={35} label="React" />
            <GaugeComposition value={10} label="TypeScript" />
            <GaugeComposition value={35} label="JavaScript" />
          </Stack>
        </Box>

        <Typography
          variant="h4"
          component="h3"
          sx={{ fontWeight: "700", mt: 2 }}
        >
          Tech Skills
        </Typography>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 2,
            flexWrap: "wrap",
            mb: 1,
          }}
        >
          {[
            "React",
            "MUI X",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Redux",
            "GitHub",
            "Next.js",
            "Node.js",
            "MongoDB",
            "Firebase",
            "Figma",
            "Postman",
            "Vite.js",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Chip
                label={skill}
                variant="outlined"
                sx={{
                  color: colors[index % colors.length],
                  borderColor: colors[index % colors.length],
                  fontWeight: 600,
                  
                }}
              />
            </motion.div>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",

            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <BasicButton text="About me" onClick={handleOpen} />
        </Box>
      </Box>
      {isOpen && <ModalCard open={isOpen} onClose={handleClose} />}
    </Container>
  );
}

export default About;
