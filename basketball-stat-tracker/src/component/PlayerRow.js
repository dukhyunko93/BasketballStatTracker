import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableCell, TableRow, Button } from '@material-ui/core';
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
    const classes = useStyles();


    const statCategory = { 0: "REB", 1: "AST", 2: "STL", 3: "BLK", 4: "TO", 5: "PF" }
    const addStat = (index) => {
        let stat = statCategory[index]
        props.updateStats(props.player, props.team, stat)
    }
    const subtractStat = (index) => {
        console.log(statCategory[index], props)
    }

    const renderScoreController = () => {
        const scores = ["FGA", "FGM", "TPA", "TPM", "FTA", "FTM"]
        return scores.map((score, index) => 
            <TableCell key={index} className="point-control">
                <Button className={classes.buttonFG}><RemoveCircleOutlineIcon /></Button>
                <Button className={classes.buttonFG}><AddCircleOutlineIcon /></Button>
            </TableCell>
        );
    };

    const renderStatSheet = () => {
        const {REB, AST, STL, BLK, TO, PF} = props.player.stats
        const stats = [REB, AST, STL, BLK, TO, PF]
        let uniqueKey = 0;
        return stats.map((stat, index) => 
            <TableCell key={index} className="point-control">
                <Button onClick={e => subtractStat(index)} className={classes.buttonStats}><RemoveCircleOutlineIcon /></Button>
                    {stat}
                <Button onClick={e => addStat(index)} className={classes.buttonStats}><AddCircleOutlineIcon /></Button>
            </TableCell>
        );
    };

    return (
        <>
            <TableRow key={props.player.id}>
                {renderScoreController()}
                <TableCell className="point-control">
                    {props.player.firstName[0]}.{props.player.lastName}
                </TableCell>
                <TableCell className="point-control">{props.player.jerseyNumber}</TableCell>
                <TableCell className="point-control">{props.player.stats.FGA} / {props.player.stats.FGM}</TableCell>
                <TableCell className="point-control">{props.player.stats.TPA} / {props.player.stats.TPM}</TableCell>
                <TableCell className="point-control">{props.player.stats.FTA} / {props.player.stats.FTM}</TableCell>
                {renderStatSheet()}
                <TableCell align="center">{props.player.stats.PTS}</TableCell>
            </TableRow>
        </>
    );
}