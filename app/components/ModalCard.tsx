import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import icons from "../../icons.json";
import Image from "next/image";
import theme from "../theme";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 600,
  outline: "none",
  bgcolor: theme.palette.background.paper,
  border: "3px solid #00ffcc",
  borderRadius: 12,
  p: 4,
};

interface ModalCardProps {
  open: boolean;
  onClose: () => void;
}

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
      p: 2,
    }}
  >
    {icons.map(({ id, src }) => (
      <Box
        key={id}
        sx={{
          m: 1,
          textAlign: "center",
          backgroundColor: "rgba(199, 200, 200, 0.8)",
          borderRadius: "5px",
          boxShadow: "0 5px 5px #00ffcc",
          p: 1,
        }}
      >
        <svg width="64" height="64">
          <use href={src}></use>
        </svg>
      </Box>
    ))}
  </Box>
);

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
        <Typography variant="h3" component="h2" align="center">
          Olha Poberezhna
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          sx={{ mb: 3,  }}
        >
          Front-end Developer
        </Typography>

        {/* Expanded Section */}
        {isExpanded && (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
            My goal is to create responsive, user-friendly websites while continuously expanding my expertise in modern web technologies. I aspire to join a dynamic team where I can collaborate, learn, and contribute to the development of exceptional digital products.
            </Typography>

            {/* Tech Skills */}
            <Typography variant="h4" component="h3" sx={{ fontWeight: "700", mb: 2 }}>
              Tech Skills
            </Typography>
            <IconGrid icons={icons} />

            {/* Soft Skills */}
            <Typography variant="h4" component="h3" sx={{ fontWeight: "700", mt: 3 }}>
              Soft Skills
            </Typography>
            <Typography variant="h5" component="ul" sx={{ pl: 2 }}>
              <li>Clear and Effective Communication</li>
              <li>Analytical Thinking</li>
              <li>Learning New Technologies</li>
              <li>Prioritization</li>
              <li>Teamwork and Collaboration</li>
              <li>Attention to Detail</li>
            </Typography>
          </Box>
        )}

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



