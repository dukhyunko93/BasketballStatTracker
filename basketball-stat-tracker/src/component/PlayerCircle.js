import React from "react";
import '../container/StatSheet.css';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Draggable } from "react-beautiful-dnd";

const useStyles = makeStyles((theme) => ({
    popover: {
            pointerEvents: 'none',
    },
    paper: {
            padding: theme.spacing(1),
    },
}));

export default function PlayerCircle(props){
    const {player, index} = props
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <Draggable key={player.id} draggableId={player.id} index={index}>
                {(provided, snapshot) => {
                    return (
                        <div
                            className="player"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                                backgroundColor: snapshot.isDragging ? "#263B4A" : "white",
                                ...provided.draggableProps.style
                            }}
                            aria-owns={open ? 'mouse-over-popover' : undefined}
                            aria-haspopup="true"
                            onMouseEnter={handlePopoverOpen}
                            onMouseLeave={handlePopoverClose}
                        >
                            {player.jerseyNumber}
                        </div>    
                    );
                }}
            </Draggable>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography>{player.firstName} {player.lastName}</Typography>
            </Popover>
        </>
    );
}