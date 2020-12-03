
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import Link from '@material-ui/core/Link';

function Copyright() {
    return (
        <>
            <Typography variant="body2" color="textSecondary">
                {'Created by Duke Ko '}
            </Typography>
            <Typography>
                <Link color="inherit" href="https://dukhyunko93.github.io/">
                    <AccountBoxOutlinedIcon fontSize="large"/>
                </Link>{' '}
            </Typography>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
  );
}