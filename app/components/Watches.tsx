"use client"

import { Box  } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Clock from "./Clock";

const timeZones = [
 
  { label: "Berlin (CET)", timeZone: "Europe/Berlin" },
  { label: "Kyiv (EET)", timeZone: "Europe/Kyiv" },
 
];

const WorldClocks = () => {
  return (
    <Box
      sx={{
       mb:4,
        p: 2,
        textAlign: "center",
      }}
    >
      
      <Grid container spacing={3} justifyContent="center">
        {timeZones.map(({ label, timeZone }) => (
          <Grid key={label}
          sx={{
            xs:12,
            sm:6,
            md:4,
            lg:2.4

          }} >
            <Clock label={label} timeZone={timeZone} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WorldClocks;
