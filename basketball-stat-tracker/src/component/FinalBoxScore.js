import React from 'react';
import './PlayerRow.css'
import styled from "styled-components";
import './PlayerRow.css'
import { Table, TableBody, TableCell, TableHead, TableRow, Container } from '@material-ui/core';

const TableContainer = styled(Container)`
    width: fit-content;
    maxWidth: none;
`

const StatTable = styled(Table)`
    margin: 10px;
    width: fit-content;
`
function sortInsertion(arr){
  for ( let i = 1; i < arr.length; i++ ){
      let currentVal = arr[i];
      for ( var j = i - 1; j >= 0 && parseInt(arr[j].jerseyNumber) > parseInt(currentVal.jerseyNumber); j-- ){
          arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentVal;
  }
  return arr;
}

export default function TeamStatsTable(props) {
    function createPlayers() {
      let players = sortInsertion(props.players)
      return players.map((player) => (
        <TableRow key={player.id}>
          <TableCell className="point-control">{player.firstName}, {player.lastName}</TableCell>
          <TableCell className="point-control">{player.jerseyNumber}</TableCell>
          <TableCell className="point-control">{player.stats.FGM} / {player.stats.FGA}</TableCell>
          <TableCell className="point-control">{player.stats.TPM} / {player.stats.TPA}</TableCell>
          <TableCell className="point-control">{player.stats.FTM} / {player.stats.FTA}</TableCell>
          <TableCell className="point-control">{player.stats.REB}</TableCell>
          <TableCell className="point-control">{player.stats.AST}</TableCell>
          <TableCell className="point-control">{player.stats.STL}</TableCell>
          <TableCell className="point-control">{player.stats.BLK}</TableCell>
          <TableCell className="point-control">{player.stats.TO}</TableCell>
          <TableCell className="point-control">{player.stats.PF}</TableCell>
          <TableCell className="point-control">{player.stats.PTS}</TableCell>
        </TableRow>
      ))
    }
    // Render home and away team table headers
    const createHeaders = () => {
        let headers = ["NAME" , "#", "FG", "3PT", "FT", "REB", "AST", "STL", "BLK", "TO", "PF", "PTS"]
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