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

export default function AwayTeamStats(props) {
    const classes = useStyles();

    // Render each players as a row on the table
    const createPlayers = () => {        
        return props.players.map((player) => <PlayerRow key={player.id} id={player.id} player={player} />)
    };

    return (
        <Container className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.cell}>FGA</TableCell>
                        <TableCell className={classes.cell}>FGM</TableCell>
                        <TableCell className={classes.cell}>TPA</TableCell>
                        <TableCell className={classes.cell}>TPM</TableCell>
                        <TableCell className={classes.cell}>FTA</TableCell>
                        <TableCell className={classes.cell}>FTM</TableCell>
                        <TableCell className={classes.cell}>Name</TableCell>
                        <TableCell className={classes.cell}>#</TableCell>
                        <TableCell className={classes.cell}>FG</TableCell>
                        <TableCell className={classes.cell}>3PT</TableCell>
                        <TableCell className={classes.cell}>FT</TableCell>
                        <TableCell className={classes.cell}>REB</TableCell>
                        <TableCell className={classes.cell}>AST</TableCell>
                        <TableCell className={classes.cell}>STL</TableCell>
                        <TableCell className={classes.cell}>BLK</TableCell>
                        <TableCell className={classes.cell}>TO</TableCell>
                        <TableCell className={classes.cell}>PF</TableCell>
                        <TableCell className={classes.cell}>PTS</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {createPlayers()}
                </TableBody>
            </Table>
        </Container>
    );
}