import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Link, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import matchExample from '../component/TeamExample'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography className={classes.title}>
                <Button color="inherit" href="/">
                    Home
                </Button>
            </Typography>
            <Button color="inherit">Login</Button>
            <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
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
                <Link style={{ textDecoration: 'none'}} color="inherit" href="/newmatchform">
                    <MenuItem>
                        New Match Form
                    </MenuItem>
                </Link>
            </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}