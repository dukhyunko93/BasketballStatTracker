import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableCell, TableRow, Button } from '@material-ui/core';
import './PlayerRow.css'

const useStyles = makeStyles({
    button:{
        minWidth: "25px",
        minHeight: "25px",
        padding: "0",
        borderRadius: "50%",
        border: "1px solid black",
        marginRight: "auto",
        marginLeft: "auto"
    }
});

export default function PlayerRow(props) {
    const classes = useStyles();

    const onClickHandler = (e) => {
        e.target.innerText++
    }

    const onDoubleClickHandler = (e) => {
        e.target.innerText = e.target.innerText - 3
    }

    return (
        <>
            <TableRow key={props.player.id}>
                <TableCell className="point-control">
                    <Button className={classes.button}>-</Button>
                    <Button>+</Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button>-</Button>
                    <Button>+</Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button>-</Button>
                    <Button>+</Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button>-</Button>
                    <Button>+</Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button>-</Button>
                    <Button>+</Button>
                </TableCell>
                <TableCell className="point-control">
                    <Button>-</Button>
                    <Button>+</Button>
                </TableCell>
                <TableCell align="center">
                    {props.player.firstName[0]}.{props.player.lastName}
                </TableCell>
                <TableCell align="center">{props.player.jerseyNumber}</TableCell>
                <TableCell align="center">{props.player.stats.FGA} / {props.player.stats.FGM}</TableCell>
                <TableCell align="center">{props.player.stats.ThreePTA} / {props.player.stats.ThreePTM}</TableCell>
                <TableCell align="center">{props.player.stats.FTA} / {props.player.stats.FTM}</TableCell>
                <TableCell className="point-control" align="center">
                    <button>-</button>
                    {props.player.stats.REB}
                    <button>+</button>
                </TableCell>
                <TableCell className="point-control" align="center">
                    <button>-</button>
                    {props.player.stats.AST}
                    <button>+</button>
                </TableCell>
                <TableCell className="point-control" align="center">
                    <button>-</button>
                    {props.player.stats.STL}
                    <button>+</button>
                </TableCell>
                <TableCell className="point-control" align="center">
                    <button>-</button>
                    {props.player.stats.BLK}
                    <button>+</button>
                </TableCell>
                <TableCell className="point-control" align="center">
                    <button>-</button>
                    {props.player.stats.TO}
                    <button>+</button>
                </TableCell>
                <TableCell className="point-control" align="center">
                    <button>-</button>
                    {props.player.stats.PF}
                    <button>+</button>
                </TableCell>
                <TableCell align="center">{props.player.stats.PTS}</TableCell>
            </TableRow>
        </>
    );
}