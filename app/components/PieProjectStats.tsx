import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { techUsage, valueFormatter } from '../../webUsageStats';
import { Box, Typography } from '@mui/material';
import { motion } from "framer-motion";

const pieParams = {
  height: 150,
  margin: { right: 5 },
  slotProps: {
    legend: { hidden: false },
  },
};

export default function PieActiveArc() {
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={{ fontWeight: '700' }}>
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
              cx: 80, 
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

       
<motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Typography sx={styles.centerText}>100%</Typography>
        </motion.div>
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
    left: '25%',
    transform: 'translate(-50%, -50%)',
    fontSize: '22px',
    fontWeight: 'bold',
  },
};
