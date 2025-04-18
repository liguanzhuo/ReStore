import Catalog from "../../features/catalog/Catalog";
import { Container, createTheme, CssBaseline } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={()=>setDarkMode(!darkMode)}/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  )
}

export default App
