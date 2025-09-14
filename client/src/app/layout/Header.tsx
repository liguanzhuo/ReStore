import { AppBar, List, ListItem, Toolbar, Typography, IconButton, Badge, Box } from "@mui/material";
import DarkSwitch from "../../style/DarkSwitch"
import { NavLink } from "react-router";
import { ShoppingCart } from "@mui/icons-material";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500',
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        /**
         * <AppBar position="static"}>: A header provided by MUI. Static position is a dufult position.
         * sx: MUI inline style property. Adding CSS style to single component.
         * {mb: 4}: margin bottom is 4*8px.
         */
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                <Box display='flex' alignItems='center'>
                    <Typography
                        variant="h6"
                        component={NavLink}
                        to='/'
                        sx={navStyles}>
                        RE-STORE
                    </Typography>
                    <DarkSwitch checked={darkMode} onChange={handleThemeChange} />
                </Box>



                {/**
                 * <List>: Provided by MUI, actually is a <ul>. By defult, <List> is a vertical list. But, I use flex layout, which is horizontal by defult.
                 * <ListItem>: Provided by MUI, actually is a <li>.
                 * 'component': Replace the tags that you actually want. Replace to 'NavLink'. So, <ListItem> is changed to <NavLink>.
                 * 'to': Which link do you want to go.
                 */}
                <Box>
                    <List sx={{ display: 'flex' }}>
                        {midLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>

                <Box display='flex' alignItems='center'>
                    <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
                        <Badge badgeContent='4' color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>

                </Box>

            </Toolbar>
        </AppBar>
    )
}