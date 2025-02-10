"use client";

import * as React from "react";
import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";
import { useTheme } from "@mui/material/styles";

interface GaugeCompositionProps {
  value: number;
  label: string;
}

function GaugePointer() {
  const { valueAngle, outerRadius, cx, cy } = useGaugeState();
  const [target, setTarget] = React.useState<{ x: number; y: number } | null>(null);

  React.useEffect(() => {
    if (valueAngle !== null) {
      setTarget({
        x: cx + outerRadius * Math.sin(valueAngle),
        y: cy - outerRadius * Math.cos(valueAngle),
      });
    }
  }, [valueAngle, outerRadius, cx, cy]);

  if (!target) return null;  

  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="red" />
      <line x1={cx} y1={cy} x2={target.x} y2={target.y} stroke="red" strokeWidth={3} />
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
        width: { xs: 100, sm: 130, md: 140 },
        height: { xs: 100, sm: 130, md: 140 },
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
