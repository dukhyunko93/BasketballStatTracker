import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
        margin: "10px",
        width: "100%",
  },
  container:{
        width: "fit-content"
  },
  body:{

  }
});

export default function HomeTeamStats(props) {
    const classes = useStyles();

    const createPlayers = () => {
        return props.players.map((players) => 
            <TableRow key={players.id}>
            <TableCell component="th" scope="players">
                {players.firstName[0]}.{players.lastName}
            </TableCell>
            <TableCell align="right">{players.jerseyNumber}</TableCell>
            <TableCell align="right">{players.stats.FGA} / {players.stats.FGM}</TableCell>
            <TableCell align="right">{players.stats.ThreePTA} / {players.stats.ThreePTM}</TableCell>
            <TableCell align="right">{players.stats.FTA} / {players.stats.FTM}</TableCell>
            <TableCell align="right">{players.stats.REB}</TableCell>
            <TableCell align="right">{players.stats.AST}</TableCell>
            <TableCell align="right">{players.stats.STL}</TableCell>
            <TableCell align="right">{players.stats.BLK}</TableCell>
            <TableCell align="right">{players.stats.TO}</TableCell>
            <TableCell align="right">{players.stats.PF}</TableCell>
            <TableCell align="right">{players.stats.PTS}</TableCell>
            </TableRow>
        )
    };

    return (
        <Container className={classes.container}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">#</TableCell>
                <TableCell align="right">FG</TableCell>
                <TableCell align="right">3PT</TableCell>
                <TableCell align="right">FT</TableCell>
                <TableCell align="right">REB</TableCell>
                <TableCell align="right">AST</TableCell>
                <TableCell align="right">STL</TableCell>
                <TableCell align="right">BLK</TableCell>
                <TableCell align="right">TO</TableCell>
                <TableCell align="right">PF</TableCell>
                <TableCell align="right">PTS</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {createPlayers()}
            </TableBody>
        </Table>
        </Container>
    );
}