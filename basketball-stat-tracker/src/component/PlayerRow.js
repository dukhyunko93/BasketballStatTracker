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

    const onClickHandler = (e) => {
        e.target.innerText++
    }

    const renderScoreController = () => {
        let scores = ["FGA", "FGM", "TPA", "TPM", "FTA", "FTM"]
        return scores.map(score => 
            <TableCell className="point-control">
                <Button className={classes.buttonFG}><RemoveCircleOutlineIcon /></Button>
                <Button className={classes.buttonFG}><AddCircleOutlineIcon /></Button>
            </TableCell>
        );
    };

    const renderStatSheet = () => {
        const {REB, AST, STL, BLK, TO, PF, PTS} = props.player.stats
        const stats = [REB, AST, STL, BLK, TO, PF, PTS]
        return stats.map(stat => 
            <TableCell className="point-control">
                <Button className={classes.buttonStats}><RemoveCircleOutlineIcon /></Button>
                    {stat}
                <Button className={classes.buttonStats}><AddCircleOutlineIcon /></Button>
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