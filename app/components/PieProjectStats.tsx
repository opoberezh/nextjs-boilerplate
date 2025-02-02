import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { techUsage, valueFormatter } from '../../webUsageStats';
import { Box, Typography } from '@mui/material';

const pieParams = {
  height: 150,
  margin: { right: 5 },
  slotProps: {
    legend: { hidden: false },
  },
};

export default function PieActiveArc() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection:  'column', 
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
       margin: 'auto',
        p: '0 10px',
      }}
    >
       <Typography variant="h4" sx={{ fontWeight: '700' }}>
          Technology Usage
        </Typography>
     
      <PieChart 
          series={[
            {
              data: techUsage,
              innerRadius: 30,
              outerRadius: 100,
              paddingAngle: 5,
              cornerRadius: 5,
              startAngle: -45,
              endAngle: 225,
              cx: 70,
              cy: 150,
              arcLabel: (item) => `${item.value}%`,
              arcLabelMinAngle: 10,
              arcLabelRadius: '50%',
              valueFormatter,
            },
          ]}
          {...pieParams}
          {...size}
        />
     
     
       

     
    </Box>
  );
}

const size = {
  width: 300,
  height: 300,
};

