import { AppBar, Toolbar, Typography } from "@mui/material";
import DarkSwitch from "../../style/DarkSwitch"

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

export default function Header({darkMode, handleThemeChange}: Props){
    return(
      /**
       * <AppBar position="static"}>: A header provided by MUI. Static position is a dufult position.
       * sx: MUI inline style property. Adding CSS style to single component.
       * {mb: 4}: margin bottom is 4*8px.
       */
        <AppBar position="static" sx={{mb: 4}}>
            <Toolbar>
                <Typography variant="h6">
                    RE-STORE
                </Typography>
                <DarkSwitch checked={darkMode} onChange={handleThemeChange}/>
            </Toolbar>
        </AppBar>
    )
}