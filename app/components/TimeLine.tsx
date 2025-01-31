"use client"

import { motion } from "framer-motion";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from "@mui/lab";
import { Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const goals = [
  { year: "2023", goal: "Completed GoIT course", done: true, icon: <SchoolIcon /> },
  { year: "2024", goal: "Created first open-source project", done: true, icon: <CodeIcon /> },
  { year: "2025", goal: "Got first freelance order", done: false, icon: <WorkIcon /> },
  { year: "2026", goal: "Reached Middle level", done: false, icon: <WorkIcon /> },
];

const timelineVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6 },
  }),
};

export default function TimeLine() {
  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        My Goals
      </Typography>
      <Timeline position="alternate-reverse">
        {goals.map((item, index) => (
          <motion.div key={index} custom={index} initial="hidden" animate="visible" variants={timelineVariants}>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                {item.year}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color={item.done ? "success" : "primary"}>
                  {item.icon}
                </TimelineDot>
                {index < goals.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6">{item.goal}</Typography>
              </TimelineContent>
            </TimelineItem>
          </motion.div>
        ))}
      </Timeline>
    </Box>
  );
}
