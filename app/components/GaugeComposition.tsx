"use client"

import * as React from 'react';
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts/Gauge';
import { useTheme } from '@mui/material/styles';

interface GaugeCompositionProps {
  value: number;
  label: string;
}

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke="red"
        strokeWidth={3}
      />
    </g>
  );
}

const GaugeComposition: React.FC<GaugeCompositionProps>=({value, label}) =>{
  const theme = useTheme();
  return (
    <GaugeContainer 
      width={200}
      height={200}
      startAngle={-110}
      endAngle={110}
      value={value}
      sx={{
        // Add shadow to the entire container
        filter: 'drop-shadow(0px 3px 5px rgba(0, 255, 204, 0.3))',
        width: { xs: 150, sm: 180, md: 200 },
        height: { xs: 150, sm: 180, md: 200 },
        margin: "auto",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GaugeReferenceArc style={{fill: theme.palette.background.paper}}/>
      <GaugeValueArc />
      <GaugePointer />
      <text x="50%" y="90%" textAnchor="middle" fontSize="16" fill="gray">
        {label}
      </text>
    </GaugeContainer>
  );
}
export default GaugeComposition;