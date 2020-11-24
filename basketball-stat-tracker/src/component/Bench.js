import React from "react";
import '../container/StatSheet.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

function Bench(props){
    const renderPopOver = () => {
        console.log("Hello", props.team)
    }

    const sortPlayers = (column) => {
        let sortedPlayers = sortInsertion(column.players)
        return sortedPlayers.map((player, index) => {
            return (
                <Draggable key={player.id} draggableId={player.id} index={index}>
                    {(provided, snapshot) => {
                        return (
                            <li
                                onClick={renderPopOver}
                                className="player"
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{
                                    backgroundColor: snapshot.isDragging ? "#263B4A" : "white",
                                    ...provided.draggableProps.style
                                }}
                            >
                                {player.jerseyNumber}
                            </li>    
                        );
                    }}
                </Draggable>
            );
        })
    }
    
    return(
        <DragDropContext onDragEnd={result => props.onDragEnd(result, props.team)}>
            {Object.entries(props.columns).map(([columnId, column], index) => {
                return (
                        <div key={columnId}>
                            <Droppable key={columnId} droppableId={columnId}>
                                {(provided, snapshot) => {
                                    return(
                                        <ul 
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={
                                                props.team === "home" ? 
                                                {background: snapshot.isDraggingOver ? "lightblue" : "#779ecb"}:
                                                {background: snapshot.isDraggingOver ? "lightpink" : "#ff6961"}
                                            }
                                        >   
                                            <h5 >{column.area}</h5>
                                            {provided.placeholder}
                                            {sortPlayers(column)}
                                        </ul>
                                    );
                                }}
                            </Droppable>
                        </div>
                );
            })}
        </DragDropContext>
    )
}

export default Bench;
