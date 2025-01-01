
"use client"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/system';

interface BasicButtonProps {
  text: string;
  sx?: SxProps<Theme>;
  onClick: ()=> void;
  // sx?: object;
}
export default function BasicButton({text, onClick, sx} : BasicButtonProps)  {
  return (
    <Stack spacing={2} direction="row">
     
      <Button sx={sx} variant="contained" onClick={onClick}>{text}</Button>
      
    </Stack>
  );
}