"use client";
import Image from "next/image";
import React, { useState } from "react";
import icons from "../../icons.json";
import BasicButton from "../components/BasicButton";
import ModalCard from "../components/ModalCard";
import { Box, Container, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import GaugeComposition from "../components/GaugeComposition";

interface Icon {
  id: string;
  src: string;
}

const IconGrid: React.FC<{ icons: Icon[] }> = ({ icons }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      borderRadius: "12px",
      padding: "0 10px",
     
    }}
  >
    {icons.map(({ id, src }) => (
      <Box
        key={id}
        sx={{
          m: 1,
          textAlign: "center",
          backgroundColor: "rgba(199, 200, 200, 0.5)",
          borderRadius: "5px",
          boxShadow: "0 5px 5px #00ffcc",
          p: 1,
        }}
      >
        <svg width="32" height="32">
          <use href={src}></use>
        </svg>
      </Box>
    ))}
  </Box>
);


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
            gap: "12px",
            textAlign: { xs: "center", md: "left" },
            minWidth: "300px",
            maxWidth: "400px",
          }}>
             <Typography variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
           
            color: "text.primary",
          }}>
          Olha Poberezhna
        </Typography>
        
          
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
          {/* Tech Skills */}
          <Typography variant="h4" component="h3" sx={{ fontWeight: "700",  }}>
              Tech Skills
            </Typography>
            <IconGrid icons={icons} />

            {/* Soft Skills */}
            <Typography variant="h4" component="h3" sx={{ fontWeight: "700",  }}>
              Soft Skills
            </Typography>
            <Typography variant="h6" component="ul" sx={{ pl: 2, textAlign: "left" }}>
              <li>Clear and Effective Communication</li>
              <li>Analytical Thinking</li>
              <li>Learning New Technologies</li>
              <li>Prioritization</li>
              <li>Teamwork and Collaboration</li>
              <li>Attention to Detail</li>
            </Typography>
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
