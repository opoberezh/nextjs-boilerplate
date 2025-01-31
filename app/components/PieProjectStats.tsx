import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { techUsage, valueFormatter } from '../../webUsageStats';

const pieParams = {
  height: 150,
  margin: { right: 5 },
  slotProps: { legend: { hidden: true } },
  
};
export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data: techUsage,
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          
          arcLabel: (item) => ` ${item.value}%`,
          arcLabelMinAngle: 35,
          arcLabelRadius: '60%',
          valueFormatter,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fontWeight: 'bold',
        },
      }} 
      {...pieParams}
      {...size}
       
         
          
       
    
    />
  );
}
const size = {
  width: 400,
  height: 200,
};