import React, { useState } from "react";
import "./StatSheet.css";
import Bench from "../component/Bench";
import TeamStatsTable from "../component/TeamStatsTable"
import { Paper } from "@material-ui/core";
import matchExample from "../component/TeamExample";

const homeInfo = {
    "Court":[],
    "Bench": matchExample.homeTeamPlayers,
}

const awayInfo = {
    "Court":[],
    "Bench":matchExample.awayTeamPlayers,
}


function StatSheet(){
    const [homeColumn, setHomeColumns] = useState(homeInfo);
    const [awayColumn, setAwayColumns] = useState(awayInfo);

    const updateStats = (updatedPlayer, team) => {
        if (team === "home"){
            let filteredPlayers = homeColumn["Court"].filter(player => player.id !== updatedPlayer.id)
            setHomeColumns({
                ...homeColumn,
                "Court": [...filteredPlayers, updatedPlayer]
            })
        } else {
            let filteredPlayers = awayColumn["Court"].filter(player => player.id !== updatedPlayer.id)
            setAwayColumns({
                ...awayColumn,
                "Court":[...filteredPlayers, updatedPlayer]
            })
        }
    }

    // Drag players from bench to court or vice versa
    const onDragEnd = (result, team) => {
        if (!result.destination) return;
        const { source, destination, draggableId } = result;
        if (team === "home"){
            if (source.droppableId !== destination.droppableId) {
                const sourceColumn = homeColumn[source.droppableId];
                const destColumn = homeColumn[destination.droppableId];
                if(destination.droppableId === "Court" && destColumn.length >= 5) return;
                const draggedPlayer = sourceColumn.find(player => player.id === draggableId);
                const filteredPlayers = sourceColumn.filter(player => player.id !== draggableId);
                setHomeColumns({
                    ...homeColumn,
                    [source.droppableId]: filteredPlayers,
                    [destination.droppableId]: [...homeColumn[destination.droppableId], draggedPlayer]
                });
            };
        } else {
            if (source.droppableId !== destination.droppableId) {
                const sourceColumn = awayColumn[source.droppableId];
                const destColumn = awayColumn[destination.droppableId];
                if(destination.droppableId === "Court" && destColumn.length >= 5) return;
                const draggedPlayer = sourceColumn.find(player => player.id === draggableId);
                const filteredPlayers = sourceColumn.filter(player => player.id !== draggableId);
                setAwayColumns({
                    ...awayColumn,
                    [source.droppableId]: filteredPlayers,
                    [destination.droppableId]: [...awayColumn[destination.droppableId], draggedPlayer]
                });
            };
        }
    };

    return(
        <div className="container" >
            <div className="homeTeamContainer" >
                <Paper style={{minWidth: "900px",padding: "1px"}}>
                    <div className="homeTeamBench">
                        <h5>Home: {matchExample.homeTeam}</h5>
                        <div className="homePlayers">
                            <Bench team="home" onDragEnd={onDragEnd} columns={homeColumn}/>
                        </div>
                    </div>
                    <TeamStatsTable team="home" updateStats={updateStats} players={homeColumn["Court"]}/>
                </Paper>
            </div>
            <div className="scoreBoard">
                <h1>Home: 100 Away: 99</h1>
            </div>
            <div className="awayTeamContainer">
                <Paper style={{minWidth: "900px",padding: "1px"}}>
                    <div className="awayTeamBench">
                        <h5>Away: {matchExample.awayTeam}</h5>
                        <div className="awayPlayers">
                            <Bench team="away" onDragEnd={onDragEnd} columns={awayColumn}/>
                        </div>
                    </div>
                    <TeamStatsTable team="away" updateStats={updateStats} players={awayColumn["Court"]}/>
                </Paper>
            </div>
        </div>
    )
}

export default StatSheet

//2pt 3pt FT Reb Ast Stl Blk TO Foul Pts
