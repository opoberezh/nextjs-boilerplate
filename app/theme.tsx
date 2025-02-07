import  {createTheme}  from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      iconColors: string[];
    };
  }
  interface PaletteOptions {
    customColors?: {
      iconColors: string[];
    };
  }
}

const theme = createTheme({
  palette: {
    primary: { main: "#00ffcc" }, 
    secondary: { main: "#00b3b3",
      light:"#B1EBC1"
     }, 
    background: {
      default: "#171717",
      paper: "#1a1a1a" ,
    },
    text: {
      primary: "#FFFFFF", 
      secondary: "#0f0f0f",
      
    },
    customColors: {
      iconColors: ["#04b3af", "#40c4ff", "#e040fb", "#aa00ff", "#304ffe", "#64ffda"], 
    },
  },
 
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
    fontSize: 12,
    h1: { fontSize: "2rem",
     
     },
    h2: { fontSize: "1.8rem",
     
     },
    h3: { fontSize: "1.5rem",
      
     },
    h4: { fontSize: "1.3rem",
      
     },
    h5: { fontSize: "1.2rem"
     
     },
    h6: { fontSize: "1rem" },
  },

  components: {
    
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#B1EBC1", 
          color: "#0f0f0f", 
          padding: "10px 20px",
          marginTop: "24px",
          fontFamily: "Nunito",
          fontSize: "16px",
          fontWeight: 700,
          textTransform: "none",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          width: "300px",
          height: "auto",
          '&:hover': {
            backgroundColor: "#263238", 
            boxShadow: "0 0 10px #00ffcc", 
            color: "#ffffff",
          },
          '&:focus': {
            outline: "3px solid #00ffcc", 
            backgroundColor: "#263238",
            color: "#ffffff",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label": {
            color: "#ffffff", 
          },
          "& label.Mui-focused": {
            color: "#00ffcc", 
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff", 
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00ffcc", 
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00ffcc", 
          },
        },
      },
    },
  },
  
});

export default theme;
