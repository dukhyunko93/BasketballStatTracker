import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableCell, TableRow, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import './PlayerRow.css'

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

    console.log(props)
    return (
        <>
            <TableRow key={props.player.id}>
                <TableCell className="point-control">
                    <Button className={classes.buttonFG}><RemoveCircleOutlineIcon /></Button>
                    <Button className={classes.buttonFG}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    
                    <Button className={classes.buttonFG}><RemoveCircleOutlineIcon /></Button>
                    <Button className={classes.buttonFG}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    
                    <Button className={classes.buttonFG}><RemoveCircleOutlineIcon /></Button>
                    <Button className={classes.buttonFG}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    
                    <Button className={classes.buttonFG}><RemoveCircleOutlineIcon /></Button>
                    <Button className={classes.buttonFG}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    
                    <Button className={classes.buttonFG}><RemoveCircleOutlineIcon /></Button>
                    <Button className={classes.buttonFG}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    
                    <Button className={classes.buttonFG}><RemoveCircleOutlineIcon /></Button>
                    <Button className={classes.buttonFG}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    {props.player.firstName[0]}.{props.player.lastName}
                </TableCell>
                <TableCell className="point-control">{props.player.jerseyNumber}</TableCell>
                <TableCell className="point-control">{props.player.stats.FGA} / {props.player.stats.FGM}</TableCell>
                <TableCell className="point-control">{props.player.stats.ThreePTA} / {props.player.stats.ThreePTM}</TableCell>
                <TableCell className="point-control">{props.player.stats.FTA} / {props.player.stats.FTM}</TableCell>
                <TableCell className="point-control">
                    <Button className={classes.buttonStats}><RemoveCircleOutlineIcon /></Button>
                    {props.player.stats.REB}
                    <Button className={classes.buttonStats}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button className={classes.buttonStats}><RemoveCircleOutlineIcon /></Button>
                    {props.player.stats.AST}
                    <Button className={classes.buttonStats}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button className={classes.buttonStats}><RemoveCircleOutlineIcon /></Button>
                    {props.player.stats.STL}
                    <Button className={classes.buttonStats}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button className={classes.buttonStats}><RemoveCircleOutlineIcon /></Button>
                    {props.player.stats.BLK}
                    <Button className={classes.buttonStats}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button className={classes.buttonStats}><RemoveCircleOutlineIcon /></Button>
                    {props.player.stats.TO}
                    <Button className={classes.buttonStats}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button className={classes.buttonStats}><RemoveCircleOutlineIcon /></Button>
                    {props.player.stats.PF}
                    <Button className={classes.buttonStats}><AddCircleOutlineIcon /></Button>
                </TableCell>
                <TableCell align="center">{props.player.stats.PTS}</TableCell>
            </TableRow>
        </>
    );
}