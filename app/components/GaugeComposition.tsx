"use client";

import * as React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

interface GaugeCompositionProps {
  value: number;
  label: string;
}

const MotionPath = motion.path;
const MotionCircle = motion.circle;

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  

  return (
    <g>
      
      <MotionCircle 
        cx={cx} 
        cy={cy} 
        r={5} 
        fill="red" 
        animate={{ scale: [1, 1.2, 1] }} 
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }} 
      />
      
     
      <MotionPath
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
        initial={{ pathLength: 0, rotate: -10 }}
        animate={{ pathLength: 1, rotate: 180 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />
    </g>
  );
}

const GaugeComposition: React.FC<GaugeCompositionProps> = ({ value, label }) => {
  const theme = useTheme();
  return (
    <GaugeContainer
      width={200}
      height={200}
      startAngle={-110}
      endAngle={110}
      value={value}
      sx={{
        filter: "drop-shadow(0px 3px 5px rgba(0, 255, 204, 0.3))",
        width: { xs: 80, sm: 150, md: 200 },
        height: { xs: 80, sm: 150, md: 200 },
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
      }}
    >
      <GaugeReferenceArc style={{ fill: theme.palette.background.paper }} />
      <GaugeValueArc />
      <GaugePointer />
      <text x="50%" y="90%" textAnchor="middle" fontSize="16" fill="gray">
        {label}
      </text>
    </GaugeContainer>
  );
};

export default GaugeComposition;
