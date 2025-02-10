import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { techUsage, valueFormatter } from '../../webUsageStats';
import { Box, Typography } from '@mui/material';
// import { motion } from "framer-motion";
import HTMLContent from './TextRounding';


const pieParams = {
  height: 150,
  margin: { right: 5 },
  
};

export default function PieActiveArc() {
  return (
    <Box sx={styles.container}>
      <Typography variant="h3" sx={{ fontWeight: '700' }}>
        Technology Usage
      </Typography>

      <Box sx={{ position: 'relative', width: size.width, height: size.height }}>
        <PieChart
         
          sx={{ position: 'relative' }}
        
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
              arcLabelRadius: '55%',
              valueFormatter,
            },
          ]}
          {...pieParams}
          {...size}
          
        />
<Box sx={styles.centerText}>
<HTMLContent />
        </Box>
       

      </Box>
    </Box>
  );
}

const size = {
  width: 300,
  height: 300,
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: 'auto',
    padding: '0 10px',
  },
  centerText: {
    position: 'absolute',
    top: '52%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    fontSize: '22px',
    fontWeight: 'bold',
  },
};
