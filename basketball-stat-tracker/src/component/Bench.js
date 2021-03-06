import React from "react";
import '../container/StatSheet.css';
import PlayerCircle from './PlayerCircle'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

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

export default function Bench(props){
    
    const sortPlayers = (column) => {
        let sortedPlayers = sortInsertion(column)
        return sortedPlayers.map((player, index) => <PlayerCircle key={player.id} player={player} index={index} />)
    }

    return(
        <DragDropContext onDragEnd={result => props.onDragEnd(result, props.team)}>
            {Object.entries(props.columns).map(([columnId, column], index) => {
                return (
                        <div className="area-container" key={columnId}>   
                            <h5 className="area">{columnId}</h5>
                            <Droppable key={columnId} droppableId={columnId}>
                                {(provided, snapshot) => {
                                    return(
                                        <div 
                                            className={columnId}
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={
                                                props.team === "home" ? 
                                                {background: snapshot.isDraggingOver ? "lightblue" : "#779ecb"}:
                                                {background: snapshot.isDraggingOver ? "lightpink" : "#ff6961"}
                                            }
                                        >
                                            {provided.placeholder}
                                            {sortPlayers(column)}
                                        </div>
                                    );
                                }}
                            </Droppable>
                        </div>
                );
            })}
        </DragDropContext>
    )
}