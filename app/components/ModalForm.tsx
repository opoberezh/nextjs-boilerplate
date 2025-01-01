import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import theme from "../theme";
import { Alert, Stack } from "@mui/material";
import BasicButton from "./BasicButton";

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

interface ModalFormProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ModalForm: React.FC<ModalFormProps> = ({ open, onClose }) => {
  const [alert, setAlert] = useState<"success" | "error" | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();


  const onSubmit: SubmitHandler<FormData> = (data) => {
    
    emailjs
      .send(
        "service_e7z3mgj", 
        "template_mehyezz", 
        {
          name: data.name,  
          email: data.email,
          message: data.message,
          to_name: "Olha",  
        },
        "Uy9vCC7Q_OMbXoeSu" 
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response); 
          setAlert("success");
          setShowAlert(true); 
        },
        (error) => {
          console.error("Email send failed:", error); 
          setAlert("error");
          setShowAlert(true); 
        }
      );
   
    setTimeout(onClose, 3000); 
  };

  useEffect(() => {
    if (!open) {
      reset();
      setAlert(null);
      setShowAlert(false); 
    }
  }, [open, reset]);

 
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false); 
      }, 7000); 
    }
  }, [showAlert]);

  return (
    <>
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
            sx={{ position: "absolute", top: 8, right: 8, color: "gray" }}
          >
            <CloseIcon />
          </IconButton>

          <Typography id="modal-title" variant="h4" component="h2" gutterBottom>
            Write Me a Letter
          </Typography>

          <Typography id="modal-description" variant="body1" sx={{ mb: 4 }}>
            Fill out the form below to get in touch with me. I&apos;ll be happy to
            answer your questions, suggestions, or comments!
          </Typography>

          <form 
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off">
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                
                {...register("name", { required: "Name is required", maxLength: 100 })}
                error={!!errors.name}
                helperText={errors.name?.message}
                
                
              />
               
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                {...register("message", { required: "Message is required", maxLength: 2000 })}
                error={!!errors.message}
                helperText={errors.message?.message}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <BasicButton text="Send" onClick={() => handleSubmit(onSubmit)()} />
            </Box>
            
          </form>
        </Box>
      </Modal>

      
      {showAlert && (
        <Stack
          sx={{
            position: "fixed",
            top: 20,
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            zIndex: 1300, 
          }}
          spacing={2}
        >
          {alert === "success" && (
            <Alert severity="success">
              Thank you for your message! I&apos;ll do my best to reply as soon as possible.
            </Alert>
          )}
          {alert === "error" && (
            <Alert severity="error">Something went wrong. Try again later.</Alert>
          )}
        </Stack>
      )}
    </>
  );
};

export default ModalForm;
