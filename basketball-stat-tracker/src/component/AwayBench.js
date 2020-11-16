import React, { useState } from "react";
import '../container/StatSheet.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function AwayBench(props){
    const [column, setColumn] = useState(props.benchColumn);

    return(
        <DragDropContext onDragEnd={result => props.onDragEnd(result, column, setColumn)}>
            {Object.entries(column).map(([id, column]) => {
                return (
                    <div key={id}>
                        <h2>{column.name}</h2>
                        <Droppable key={id} droppableId={id}>
                            {(provided, snapshot) => {
                                return(
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            display: "flex",
                                            background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                                            padding: 4,
                                        }}
                                    >
                                        {provided.placeholder}
                                            {column.items.map((item,index) => {
                                            return (
                                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                                    {(provided, snapshot) => {
                                                        return (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    userSelect: "none",
                                                                    padding: 16,
                                                                    margin: 3,
                                                                    minHeight: "50px",
                                                                    backgroundColor: snapshot.isDragging ? "#263B4A" : "#ff6961",
                                                                    color: "white",
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

export default AwayBench;
