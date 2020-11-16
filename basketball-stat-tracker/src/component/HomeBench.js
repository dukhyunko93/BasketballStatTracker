import React, { useState } from "react";
import '../container/StatSheet.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function HomeBench(props){
    return(
        <DragDropContext onDragEnd={result => props.onDragEnd(result, props.columns)}>
            {Object.entries(props.columns).map(([columnId, column], index) => {
                return (
                        <div key={columnId}>
                            <h2>{column.name}</h2>
                            <Droppable key={columnId} droppableId={columnId}>
                                {(provided, snapshot) => {
                                    return(
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            style={{
                                                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                                                padding: 4,
                                            }}
                                        >
                                            {provided.placeholder}
                                                {column.players.map((item,index) => {
                                                return (
                                                    <Draggable key={item.id} draggableId={item.id} index={index}>
                                                        {(provided, snapshot) => {
                                                            return (
                                                                <div
                                                                    className="player"
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        userSelect: "none",
                                                                        backgroundColor: snapshot.isDragging ? "#263B4A" : "#3d7ab8",
                                                                        ...provided.draggableProps.style
                                                                    }}
                                                                >
                                                                    {item.jerseyNumber}
                                                                </div>    
                                                            );
                                                        }}
                                                    </Draggable>
                                                );
                                            })}
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

export default HomeBench;
