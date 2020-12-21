import React from "react";
import '../container/StatSheet.css';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const PopoverName = styled(Popover)`
    pointer-events: none;
`

const PlayerNameTypography = styled(Typography)`
    padding: 5px;
`

export default function PlayerCircle(props){
    const {player, index} = props
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
            <PopoverName
                id="mouse-over-popover"
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
                <PlayerNameTypography>{player.firstName} {player.lastName}</PlayerNameTypography>
            </PopoverName>
        </>
    );
}