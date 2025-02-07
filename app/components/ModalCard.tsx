import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import data from '../../slider-data';
import Image from "next/image";
import theme from "../theme";
import { Divider } from "@mui/material";
import DemoSlider from "./Achievements";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  maxHeight: "90vh",
  outline: "none",
  bgcolor: theme.palette.background.paper,
  border: "3px solid #00ffcc",
  borderRadius: 12,
  p: 4,
  overflowY: "auto",
};

interface ModalCardProps {
  open: boolean;
  onClose: () => void;
}

const ModalCard: React.FC<ModalCardProps> = ({ open, onClose }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleToggleExpand = () => setExpanded((prev) => !prev);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "gray",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Avatar */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "#263238",
              boxShadow: "0 0 50px #00ffcc",
            }}
          >
            <Image
              src="/assets/Subject 2.png"
              alt="Avatar"
              loading="lazy"
              width={300}
              height={300}
            />
          </Box>
        </Box>

        {/* Main Info */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "text.primary",
            mb: 2,
          }}
        >
          Once upon a story
        </Typography>

        <Typography variant="h6" align="justify" sx={{ mb: 1 }}>
          I am 44 years old, the proud wife, and the mother of two wonderful
          children.
        </Typography>
        

        {/* Expanded Section */}
        {isExpanded && (
          <Box>
            <Divider sx={{ my: 1 }} />

            {/* Personal Info */}
            <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold",}}>
              Passions 🌟
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                • Music and singing have always been my passion — once, I
                dreamed of being a singer.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
                <audio controls>
                  <source src="/LiftMeUp.mp3" type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </Box>
              <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
                • I love animals, especially dogs. I believe they make people
                better.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", m: 2 }}>
  <Box sx={{ borderRadius: 4, overflow: "hidden" }}> 
    <Image
      src="/assets/IMG.jpg"
      alt="Girl with dog"
      loading="lazy"
      width={250}
      height={300}
    />
  </Box>
</Box>
<Typography variant="h6" gutterBottom align="justify" sx={{ mb: 1 }}>
          I love challenging myself by exploring new fields, setting goals, and
          achieving them.
        </Typography>  
            </Box>
            <DemoSlider data={data}/>
          </Box>
        )}
 <Typography variant="h4" component="h3" sx={{ fontWeight: "700",  }}>
              Soft Skills 🧩
            </Typography>
            <Typography variant="h6" component="ul" sx={{ pl: 2, textAlign: "left" }}>
              <li>Clear and Effective Communication</li>
              <li>Analytical Thinking</li>
              <li>Learning New Technologies</li>
              <li>Prioritization</li>
              <li>Teamwork and Collaboration</li>
              <li>Attention to Detail</li>
            </Typography>
        {/* Toggle Button */}
        <Button
          size="small"
          onClick={handleToggleExpand}
          sx={{ mt: 3, display: "block", mx: "auto" }}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalCard;
