"use client";

import Image from "next/image";
import { GitHub, LinkedIn, Telegram } from "@mui/icons-material";
import BasicButton from "./components/BasicButton";
import { useState } from "react";
import ModalForm from "./components/ModalForm";
import { Box, Container, Typography, Chip, useTheme } from "@mui/material";
import {motion} from "framer-motion";
import WorldClocks from "./components/Watches";

export default function Home() {
  const theme = useTheme();
  const colors = theme.palette.customColors.iconColors; 
 
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
      }}
    >
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
          }}
        >
          <Image
            className="responsiveImage"
            src="/assets/innovation.png"
            alt="Innovating image"
            width={450}
            height={450}
            priority={true}
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
            Front-end Developer
          </Typography>
         
          <Typography variant="h4" component="p" sx={{ fontStyle: "italic", fontWeight: 700, }}>
          Olha Poberezhna
    </Typography>
          <Typography variant="h4">
            Passionate about building interactive and user-friendly web
            applications.
          </Typography>
         <Box
  sx={{
    display: "flex",
    justifyContent: { xs: "center", md: "flex-start" },
    gap: 2,
    flexWrap: "wrap",
  }}
>
  {["React", "TypeScript", "JavaScript", "HTML5", "CSS3"].map(
    (skill, index) => (
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
    )
  )}
</Box>

<Box sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },}}>
<WorldClocks />
</Box>
           
          <Typography variant="h6" sx={{ textAlign: { xs: "center", md: "left" }, mt: 1 }}>
            Interested in collaborating? Drop me a message!
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
             
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <a
              href="https://github.com/opoberezh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub fontSize="large" sx={{ color: "text.primary" }} />
            </a>
            <a
              href="https://www.linkedin.com/in/olha-poberezhna-b06279265/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn fontSize="large" sx={{ color: "text.primary" }} />
            </a>
            <a
              href="https://t.me/Olha_poberezh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram fontSize="large" sx={{ color: "text.primary" }} />
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",

              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <BasicButton text="Write Letter" onClick={handleOpen} />
          </Box>
        </Box>
      </Container>
      {isOpen && <ModalForm open={isOpen} onClose={handleClose} />}
    </Box>
  );
}
