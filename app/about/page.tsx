"use client";
import Image from "next/image";
import React, { useState } from "react";
import icons from "../../icons.json";
import BasicButton from "../components/BasicButton";
import ModalCard from "../components/ModalCard";
import { Box, Container, Typography } from "@mui/material";
import {motion} from 'framer-motion';
import { Stack } from "@mui/material";
import GaugeComposition from "../components/GaugeComposition";
import { useTheme } from "@mui/material/styles";

interface Icon {
  id: string;
  src: string;
}



const IconGrid: React.FC<{ icons: Icon[] }> = ({ icons }) => {
  const theme = useTheme();
  const colors = theme.palette.customColors.iconColors; 

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        borderRadius: "12px",
       mb: 1,
       maxWidth: '471px'
      }}
    >
      {icons.map(({ id, src }, index) => (
       
          <motion.div
           key={id}
           initial={{ opacity: 0, y: -10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: index * 0.1, duration: 0.5 }}
          >
             <Box
          key={id}
          sx={{
            m: 1,
            textAlign: "center",
            backgroundColor: "rgba(227, 228, 229, 0.5)",
            borderRadius: "5px",
            boxShadow: `0 5px 10px ${colors[index % colors.length]}`, 
            p: 0.5,
          }}
        >
             <svg width="32" height="32" style={{ filter: "drop-shadow(1px 1px 2px rgba(255,255,255,1))" }}>
            <use href={src}></use>
          </svg>
          </Box>
          </motion.div>
         
      
      ))}
    </Box>
  );
};





function About() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

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
    }}> 
      <Container
     
     sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "center",
      gap: { xs: 4, md: 10 },
    }}
      >
        <Box   
        sx={{
            backgroundColor: "rgba(227, 228, 229, 0.5)",
            borderRadius: "50%",
            maxWidth: "450px",
            boxShadow: "0 0 30px rgba(0, 255, 204, 0.8)",
          }}>
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
          maxWidth: '471px'
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
         
          <Typography variant="h4" component="h3" sx={{ fontWeight: "700", mt:2 }}>
              Tech Skills
            </Typography>
            <IconGrid icons={icons} />

      
           
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
