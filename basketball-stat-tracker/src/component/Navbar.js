import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core/';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu'
import styled from "styled-components";

const NavBarContainer = styled.div`
    flex-grow: 1;
`

const HomeTypography = styled(Typography)`
    flex-grow: 1;
`

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <NavBarContainer>
        <AppBar position="static">
            <Toolbar>
                <HomeTypography>
                    <Button color="inherit" href="/">
                        Home
                    </Button>
                </HomeTypography>
                <Button color="inherit">Login</Button>
                <IconButton edge="end" color="inherit" onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    getContentAnchorEl={null}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >   
                    <Link style={{ textDecoration: 'none', color:'black'}} to="/newmatchform">
                        <MenuItem>
                            New Match Form
                        </MenuItem>
                    </Link>
                    {localStorage.getItem("match") ? 
                    <Link style={{ textDecoration: 'none', color:'black'}} to={{pathname: "/statsheet"}}>
                        <MenuItem>
                            Continue Last Match
                        </MenuItem>
                    </Link> : null}
                </Menu>
            </Toolbar>
        </AppBar>
        </NavBarContainer>
    );
}

  
export default NavBar;