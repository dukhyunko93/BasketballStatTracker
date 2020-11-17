import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayerRow from "./PlayerRow"
import './PlayerRow.css'
import { Table, TableBody, TableCell, TableHead, TableRow, Container, Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
        margin: "10px",
        width: "fit-content",
  },
  container:{
      width: "fit-content",
      maxWidth: "none"
  },
  cell:{
      align: "center",
      minPaddingRight: "5px",
      minPaddingLeft: "5px",
  }
});

export default function HomeTeamStats(props) {
    const classes = useStyles();

    const createPlayers = () => {        
        return props.players.map((player) => <PlayerRow key={player.id} id={player.id} player={player} />)
    };

    return (
        <Container className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.cell} align="center">FGA</TableCell>
                        <TableCell className={classes.cell} align="center">FGM</TableCell>
                        <TableCell className={classes.cell} align="center">TPA</TableCell>
                        <TableCell className={classes.cell} align="center">TPM</TableCell>
                        <TableCell className={classes.cell} align="center">FTA</TableCell>
                        <TableCell className={classes.cell} align="center">FTM</TableCell>
                        <TableCell className={classes.cell} align="center">Name</TableCell>
                        <TableCell className={classes.cell} align="center">#</TableCell>
                        <TableCell className={classes.cell} align="center">FG</TableCell>
                        <TableCell className={classes.cell} align="center">3PT</TableCell>
                        <TableCell className={classes.cell} align="center">FT</TableCell>
                        <TableCell className={classes.cell} align="center">REB</TableCell>
                        <TableCell className={classes.cell} align="center">AST</TableCell>
                        <TableCell className={classes.cell} align="center">STL</TableCell>
                        <TableCell className={classes.cell} align="center">BLK</TableCell>
                        <TableCell className={classes.cell} align="center">TO</TableCell>
                        <TableCell className={classes.cell} align="center">PF</TableCell>
                        <TableCell className={classes.cell} align="center">PTS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {createPlayers()}
                </TableBody>
            </Table>
        </Container>
    );
}