import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import theme from "../theme";

interface ClockProps {
  label: string;
  timeZone: string;
}

function Clock({ label, timeZone }: ClockProps) {
  const [rotations, setRotations] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateRotations = () => {
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      });

      const now = new Date();
      const parts = formatter.formatToParts(now);
      const hours = Number(parts.find((part) => part.type === "hour")?.value || 0);
      const minutes = Number(parts.find((part) => part.type === "minute")?.value || 0);
      const seconds = Number(parts.find((part) => part.type === "second")?.value || 0);

      setRotations({
        hours: (hours % 12) * 30 + minutes * 0.5,
        minutes: minutes * 6,
        seconds: seconds * 6,
      });
    };

    calculateRotations(); 
    const interval = setInterval(calculateRotations, 1000); 

    return () => clearInterval(interval);
  }, [timeZone]);

  const clockNumbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 2,
        textAlign: "center",
        borderRadius: "50%",
        width: 100,
        height: 100,
        position: "relative",
        boxShadow: 
          `0px 0px 6px rgba(0, 179, 179, 0.1), 
           0px 0px 3px rgba(0, 255, 204, 0.08), 
           0px 0px 16px rgba(0, 255, 204, 0.12), 
           0px 16px 24px rgba(0, 255, 204, 0.1)`,
        backgroundColor: "background.paper",
        border: "2px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Numbers */}
      {clockNumbers.map((num) => (
        <Typography
          key={num}
          sx={{
            position: "absolute",
            fontSize: "0.8rem",
            top: "40%",
            transform: `rotate(${num * 30}deg) translate(0, -40px) rotate(-${num * 30}deg)`,
          }}
        >
          {num}
        </Typography>
      ))}

      {/* Clock Hands */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "70%",
          height: "70%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          border: "2px solid rgba(0, 0, 0, 0.2)",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Hour Hand */}
        <Box
          sx={{
            position: "absolute",
            width: "3px",
            height: "35%",
            backgroundColor: theme.palette.primary.main,
            top: "15%",
            left: "50%",
            transformOrigin: "bottom",
            transform: `rotate(${rotations.hours}deg)`,
            transition: "transform 0.5s linear",
            zIndex: 2,
          }}
        />
        {/* Minute Hand */}
        <Box
          sx={{
            position: "absolute",
            width: "2px",
            height: "45%",
            backgroundColor: "gray",
            top: "5%",
            left: "50%",
            transformOrigin: "bottom",
            transform: `rotate(${rotations.minutes}deg)`,
            transition: "transform 0.5s linear",
            zIndex: 2,
          }}
        />
        {/* Second Hand */}
        <Box
          sx={{
            position: "absolute",
            width: "1px",
            height: "50%",
            backgroundColor: "red",
            top: "0%",
            left: "50%",
            transformOrigin: "bottom",
            transform: `rotate(${rotations.seconds}deg)`,
            transition: "transform 0.5s linear",
            zIndex: 2,
          }}
        />
      </Box>
      <Typography
        variant="h6"
        sx={{
          marginTop: "130%",
          textAlign: "center",
          fontSize: "0.9rem",
          color: "text.primary",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default Clock;
