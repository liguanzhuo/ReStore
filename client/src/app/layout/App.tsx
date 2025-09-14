import Catalog from "../../features/catalog/Catalog";
import { Container, createTheme, CssBaseline } from "@mui/material";
import Header from "./Header";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";
import { Outlet } from "react-router";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  /**
   * Theme: A global style. It can be customlized.
   * The state of 'paletteType' is decided by 'darkMode'. 
   * 'darkMode' = false, 'paletteType' = light
   * 'darkMode' = true, 'paletteType' = dark
   */
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background:{
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })
  
/**
 * <CssBaseline />: Remove the defult padding and margin in browser. Unify the font and layout.
 * <Container>: Limit the width of content. Auto-adjust the width according to the different screen. Center the content horizontally on the page.
 */
  return (
    /**
     * ThemeProvider: Provide the theme to the entire React component tree so that all child components can share the same style rule.
     */
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={()=>setDarkMode(!darkMode)}/>
      <Container>
        <Outlet />
      </Container>
    </ThemeProvider>
  )
}
