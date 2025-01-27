"use client";
import Image from "next/image";
import React, { useState } from "react";

import BasicButton from "../components/BasicButton";
import ModalCard from "../components/ModalCard";
import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import GaugeComposition from "../components/GaugeComposition";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box component="main" 
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
     
      bgcolor: "background.default",
      p: { xs: 2, sm: 4 },
    }}
    >
      <Container
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        gap:{xs: 4, md: 10},
       
      }}
      >
        <Box sx={{ backgroundColor: "rgba(227, 228, 229, 0.5)", borderRadius: "50%", 
          boxShadow: "0 0 30px rgba(0, 255, 204, 0.8)", maxWidth: "450px" }}>
          <Image
            src="/assets/pana.png"
            alt="Woman is typing on a laptop"
            width={450}
            height={450}
            priority={true}
            className="responsiveImage"
          />
        </Box>

        <Box 
        sx={{
          display: "flex",
          flexDirection: "column",
            gap: "24px",
            textAlign: { xs: "center", md: "left" },
            minWidth: "300px",
            maxWidth: "400px",
          }}>
          <Typography
        variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
           
            color: "text.primary",
          }}
          >Once upon a story</Typography>
          <Typography 
          variant="h4"
          component="p"
         >
            As a junior front-end developer, I am excited to begin my career in
            the IT field, ready to apply my skills and continue learning
          </Typography>
          <Stack
            direction={{ xs: "row", md: "row" }}
            spacing={{ xs: 1, md: 3 }}
            sx={{  alignItems: 'center' }}
          >
            <GaugeComposition value={45} label="React" />
            <GaugeComposition value={20} label="TypeScript" />
            <GaugeComposition value={50} label="JavaScript" />
          </Stack>
          <Box sx={{
        display: "flex",
        
        alignItems: "center",
        justifyContent: {xs:"center", md:"flex-start"}
      }}>
                <BasicButton text="About me" onClick={handleOpen} />
          </Box>
      
        </Box>
       
      </Container>
      {isOpen && <ModalCard open={isOpen} onClose={handleClose} />}
    </Box>
  );
}

export default About;
