import React, { useState } from 'react';
import matchExample from '../component/TeamExample';
import './StatSheet.css';
import Court from '../component/Court';
import Bench from '../component/Bench';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";


const homePlayersArray = () => {
    return matchExample.homeTeamPlayers;
}

const awayPlayersArray = () => {
    return matchExample.awayTeamPlayers;
}

const playerColumns = () => [
    {
        id: uuid(),
        name: 'Home Bench',
        item: homePlayersArray(),
    }
]

function StatSheet(props){

    const [columns, setColumns] = useState(playerColumns);

    return(
        <div className="statsheet" style={{display:'flex', justifyContent:'center', height:'100%'}}>
            <DragDropContext onDragEnd={result => console.log(result)}>
                {Object.entries(columns).map(([id, column]) => {
                    return (
                        <Droppable droppableId={id}>
                            {(provided, snapshot) => {
                                return(
                                    <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{
                                            background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                            padding: 4,
                                            width: 250,
                                            minHeight: 500,
                                        }}
                                    >
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
                                                                    userSelect: 'none',
                                                                    padding: 16,
                                                                    margin: '0 0 8px 0',
                                                                    minHeight: '50px',
                                                                    backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                                                                    color: 'white',
                                                                    ...provided.draggableProps.style
                                                                }}
                                                            >
                                                                {item.jerseyNumber}
                                                            </div>    
                                                        )
                                                    }}
                                                </Draggable>
                                            )
                                        })}
                                    </div>
                                )
                            }}
                        </Droppable>
                    )
                })}
            </DragDropContext>
        </div>
    )
}

export default StatSheet

//2pt 3pt FT Reb Ast Stl Blk TO Foul Pts
