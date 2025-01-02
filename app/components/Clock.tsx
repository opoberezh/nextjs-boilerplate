"use client"

import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import theme from "../theme";

interface ClockProps {
  label: string;
  timeZone: string;
}

function Clock({ label, timeZone }: ClockProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);
  
  const getRotation = (unit: "hours" | "minutes" | "seconds") => {
    const utc = time.toLocaleString("en-US", { timeZone: "UTC" });
    const currentTime = new Date(utc).toLocaleString("en-US", {
      timeZone,
    });
    const current = new Date(currentTime);

    switch (unit) {
      case "hours":
        return (current.getHours() % 12) * 30 + current.getMinutes() * 0.5;
      case "minutes":
        return current.getMinutes() * 6;
      case "seconds":
        return current.getSeconds() * 6;
      default:
        return 0;
    }
  };

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
        boxShadow: "0 0 6px rgba(0, 255, 204, 0.5)",
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
            transform: `rotate(${getRotation("hours")}deg)`,
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
            transform: `rotate(${getRotation("minutes")}deg)`,
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
            transform: `rotate(${getRotation("seconds")}deg)`,
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
