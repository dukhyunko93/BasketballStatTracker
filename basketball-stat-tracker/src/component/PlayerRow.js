import React from 'react'
import './PlayerRow.css'
import styled from "styled-components";
import { TableCell, TableRow, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const buttonStyle = `
    min-width: 25px !important;
    min-height: 25px !important;
    padding: 0 !important;
    border-radius: 50% !important;
`
const ButtonFG = styled(Button)`
    ${buttonStyle}
    margin-right: auto !important;
    margin-left: auto !important;
`
const ButtonStats = styled(Button)`
    ${buttonStyle}
    margin-right: 5px !important;
    margin-left: 5px !important;
`
export default function PlayerRow(props) {
    const{player, team} = props

    const statCategory = { 0: "REB", 1: "AST", 2: "STL", 3: "BLK", 4: "TO", 5: "PF" }
    const addStat = (index) => {
        let stat = statCategory[index];
        player.stats[stat]++;
        props.updateStats(team);
    }

    const subtractStat = (index) => {
        let stat = statCategory[index];
        player.stats[stat]--;
        if(player.stats[stat] < 0) player.stats[stat] = 0;
        props.updateStats(team);
    }

    const addScore = (type) => {
        if(type === "TPM"){
            player.stats["TPM"]++;
            player.stats["TPA"]++;
            player.stats["FGM"]++;
            player.stats["FGA"]++;
        }else if(type === "TPA"){
            player.stats["TPA"]++;
            player.stats["FGA"]++;
        }else if(type[2] === "M"){
            let attempt = type.substring(0,2) + "A"
            player.stats[type]++;
            player.stats[attempt]++;
        }else{
            player.stats[type]++;
        }
        let newScore = (player.stats["FGM"] * 2) + (player.stats["FTM"] * 1) + (player.stats["TPM"] * 1)
        let scoreDifference = newScore - player.stats["PTS"]
        player.stats["PTS"] = newScore
        props.updateStats(team, scoreDifference)
    }

    const subtractScore = type => {
        if(type === "TPM"){
            if(player.stats["TPM"] > 0){
                player.stats["TPM"]--;
                player.stats["TPA"]--;
                player.stats["FGM"]--;
                player.stats["FGA"]--;
            }
        }else if(type === "TPA"){
            if(player.stats["TPA"] > 0){
                player.stats["TPA"]--;
                player.stats["FGA"]--;
            }
        }else if(type[2] === "M"){
            let attempt = type.substring(0,2) + "A"
            player.stats[type]--;
            player.stats[attempt]--;
            if(player.stats[attempt] < 0) player.stats[attempt] = 0;
        }else{
            player.stats[type]--;
        }
        if(player.stats[type] < 0) player.stats[type] = 0;
        let newScore = (player.stats["FGM"] * 2) + (player.stats["FTM"] * 1) + (player.stats["TPM"] * 1)
        let scoreDifference = newScore - player.stats["PTS"]
        player.stats["PTS"] = newScore
        props.updateStats(team, scoreDifference)
    }

    const renderScoreController = () => {
        const scoreCategory = ["FGA", "FGM", "TPA", "TPM", "FTA", "FTM"]
        return scoreCategory.map((type, index) => 
            <TableCell key={index} className="point-control">
                <ButtonFG onClick={() => subtractScore(type)} ><RemoveCircleOutlineIcon /></ButtonFG>
                <ButtonFG onClick={() => addScore(type)} ><AddCircleOutlineIcon /></ButtonFG>
            </TableCell>
        );
    };

    const renderStatSheet = () => {
        const {REB, AST, STL, BLK, TO, PF} = player.stats
        const stats = [REB, AST, STL, BLK, TO, PF]
        return stats.map((stat, index) => 
            <TableCell key={index} className="point-control">
                <ButtonStats onClick={() => subtractStat(index)}><RemoveCircleOutlineIcon /></ButtonStats>
                    {stat}
                <ButtonStats onClick={() => addStat(index)}><AddCircleOutlineIcon /></ButtonStats>
            </TableCell>
        );
    };

    return (
        <>
            <TableRow key={player.id}>
                <TableCell className="point-control">{player.firstName}, {player.lastName}</TableCell>
                <TableCell className="point-control">{player.jerseyNumber}</TableCell>
                {renderScoreController()}
                <TableCell className="point-control">{player.stats.FGM} / {player.stats.FGA}</TableCell>
                <TableCell className="point-control">{player.stats.TPM} / {player.stats.TPA}</TableCell>
                <TableCell className="point-control">{player.stats.FTM} / {player.stats.FTA}</TableCell>
                <TableCell className="point-control">{player.stats.PTS}</TableCell>
                {renderStatSheet()}
            </TableRow>
        </>
    );
}