import React, { useState } from "react";
import '../container/StatSheet.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function AwayBench(props){
    return(
        <DragDropContext onDragEnd={result => props.onDragEnd(result, props.columns)}>
            {Object.entries(props.columns).map(([columnId, column], index) => {
                return (
                        <div key={columnId}>
                            <Droppable key={columnId} droppableId={columnId}>
                                {(provided, snapshot) => {
                                    return(
                                        <ul 
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                // background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                                            }}
                                        >   
                                            <h5>{column.area}</h5>
                                            {provided.placeholder}
                                                {column.players.map((item,index) => {
                                                return (
                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <li
                                                                    className="player"
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        backgroundColor: snapshot.isDragging ? "#263B4A" : "white",
                                                                        ...provided.draggableProps.style
                                                                    }}
                                                                >
                                                                    {item.jerseyNumber}
                                                                </li>    
                                                            );
                                                        }}
                                                    </Draggable>
                                                );
                                            })}
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

export default AwayBench;
