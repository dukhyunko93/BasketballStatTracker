import React from 'react';
import PlayerRow from "./PlayerRow"
import styled from "styled-components";
import { Table, TableBody, TableCell, TableHead, TableRow, Container } from '@material-ui/core';

const TableContainer = styled(Container)`
    width: fit-content;
    maxWidth: none;
`

const StatTable = styled(Table)`
    margin: 10px;
    width: fit-content;
`

export default function TeamStatsTable(props) {
    // Render each players as a row on the table
    const createPlayers = () => {
        return props.players.map((player) => <PlayerRow team={props.team} updateStats={props.updateStats} key={player.id} player={player} />)
    };
    
    // Render home and away team table headers
    const createHeaders = () => {
        let headers = ["NAME" , "#", "FGA", "FGM", "TPA", "TPM", "FTA", "FTM", "FG", "3PT", "FT", "PTS", "REB", "AST", "STL", "BLK", "TO", "PF"]
        return headers.map(header => 
            <TableCell key={header} className="table-header-cell">{header}</TableCell>
        )
    }
    return (
        <TableContainer>
            <StatTable>
                <TableHead>
                    <TableRow>
                        {createHeaders()}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {createPlayers()}
                </TableBody>
            </StatTable>
        </TableContainer>
    );
}