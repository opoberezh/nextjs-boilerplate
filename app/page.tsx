"use client"

import Image from "next/image";

import BasicButton from "./components/BasicButton";
import { useState } from "react";
import ModalForm from "./components/ModalForm";
import { Box, Container, Typography } from "@mui/material";

import WorldClocks from "./components/Watches";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);



  return (
    <Box  component="main" 
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      maxHeight: "100vh",
      bgcolor: "background.default",
      p: 3,
    }}>
      
      <Container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap:{xs: 4, md: 10},
         
        }}
      >
          <Box sx={{ backgroundColor: "rgba(227, 228, 229, 0.5)", borderRadius: "50%" ,maxWidth:"592px", boxShadow: "0 0 30px #00ffcc"}}>
        <Image className="responsiveImage"
          src="/assets/innovation.png"
          alt="Innovating image"
          width={450}
          height={450}
          priority={true}
          
        />
        </Box>
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
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
            Front-end Developer
          </Typography>
          <Typography
            variant="h4"
            component="p"
            sx={{
              mb: 1,
              
            }}
          >
            Olha Poberezhna
          </Typography>
          <WorldClocks/>
     
          <Box sx={{
        display: "flex",
       
        alignItems: "center",
        justifyContent: {xs:"center", md:"flex-start"}
        
      }}>
                <BasicButton text="Write Letter" onClick={handleOpen} />
          </Box>
        </Box> 
        
        </Container>
        {isOpen && <ModalForm open={isOpen} onClose={handleClose} />}
        
   
    </Box>
  );
}
