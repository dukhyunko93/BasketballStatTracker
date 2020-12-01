import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayerRow from "./PlayerRow"
import './PlayerRow.css'
import { Table, TableBody, TableCell, TableHead, TableRow, Container } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        margin: "10px",
        width: "fit-content",
    },
    container:{
        width: "fit-content",
        maxWidth: "none"
    }
});

export default function TeamStatsTable(props) {
    const classes = useStyles();
    // Render each players as a row on the table
    const createPlayers = () => {
        return props.players.map((player) => <PlayerRow team={props.team} updateStats={props.updateStats} updateSubStats={props.updateSubStats} key={player.id} player={player} />)
    };
    
    // Render home and away team table headers
    const createHeaders = () => {
        let headers = ["NAME" , "#", "FGA", "FGM", "TPA", "TPM", "FTA", "FTM", "FG", "3PT", "FT", "PTS", "REB", "AST", "STL", "BLK", "TO", "PF"]
        return headers.map(header => 
            <TableCell key={header} className="table-header-cell">{header}</TableCell>
        )
    }
    return (
        <Container className={classes.container}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {createHeaders()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {createPlayers()}
                </TableBody>
            </Table>
        </Container>
    );
}