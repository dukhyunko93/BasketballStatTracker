import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableCell, TableRow, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles({
    buttonFG:{
        minWidth: "25px",
        minHeight: "25px",
        padding: "0",
        borderRadius: "50%",
        marginRight: "auto",
        marginLeft: "auto"
    },
    buttonStats:{
        minWidth: "25px",
        minHeight: "25px",
        padding: "0",
        borderRadius: "50%",
        marginRight: "5px",
        marginLeft: "5px",
    }
});

export default function PlayerRow(props) {
    const{player, team} = props

    const classes = useStyles();

    const statCategory = { 0: "REB", 1: "AST", 2: "STL", 3: "BLK", 4: "TO", 5: "PF" }
    const addStat = (index) => {
        let stat = statCategory[index];
        player.stats[stat]++;
        props.updateStats(player, team);
    }

    const subtractStat = (index) => {
        let stat = statCategory[index];
        player.stats[stat]--;
        if(player.stats[stat] < 0) player.stats[stat] = 0;
        props.updateStats(player, team);
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
        let totalScore = (player.stats["FGM"] * 2) + (player.stats["FTM"] * 1) + (player.stats["TPM"] * 3)
        player.stats["PTS"] = totalScore
        props.updateStats(player, team)
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
        let totalScore = (player.stats["FGM"] * 2) + (player.stats["FTM"] * 1) + (player.stats["TPM"] * 3)
        player.stats["PTS"] = totalScore
        props.updateStats(player, team)
    }

    const renderScoreController = () => {
        const scoreCategory = ["FGA", "FGM", "TPA", "TPM", "FTA", "FTM"]
        return scoreCategory.map((type, index) => 
            <TableCell key={index} className="point-control">
                <Button onClick={() => subtractScore(type)} className={classes.buttonFG}><RemoveCircleOutlineIcon /></Button>
                <Button onClick={() => addScore(type)} className={classes.buttonFG}><AddCircleOutlineIcon /></Button>
            </TableCell>
        );
    };

    const renderStatSheet = () => {
        const {REB, AST, STL, BLK, TO, PF} = player.stats
        const stats = [REB, AST, STL, BLK, TO, PF]
        return stats.map((stat, index) => 
            <TableCell key={index} className="point-control">
                <Button onClick={() => subtractStat(index)} className={classes.buttonStats}><RemoveCircleOutlineIcon /></Button>
                    {stat}
                <Button onClick={() => addStat(index)} className={classes.buttonStats}><AddCircleOutlineIcon /></Button>
            </TableCell>
        );
    };

    return (
        <>
            <TableRow key={player.id}>
                {renderScoreController()}
                <TableCell className="point-control">
                    {player.firstName[0]}.{player.lastName}
                </TableCell>
                <TableCell className="point-control">{player.jerseyNumber}</TableCell>
                <TableCell className="point-control">{player.stats.FGM} / {player.stats.FGA}</TableCell>
                <TableCell className="point-control">{player.stats.TPM} / {player.stats.TPA}</TableCell>
                <TableCell className="point-control">{player.stats.FTM} / {player.stats.FTA}</TableCell>
                {renderStatSheet()}
                <TableCell align="center">{player.stats.PTS}</TableCell>
            </TableRow>
        </>
    );
}