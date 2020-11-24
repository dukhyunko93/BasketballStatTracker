import React, { useState } from "react";
import "./StatSheet.css";
import Bench from "../component/Bench";
import TeamStatsTable from "../component/TeamStatsTable"
import { uuid } from "uuidv4"
import { Paper } from "@material-ui/core";
import matchExample from "../component/TeamExample";

const homeInfo = {
    "Court":{
        area: "Court",
        players: [],
    },
    "Bench":{
        area: "Bench",
        players: matchExample.homeTeamPlayers,
    }
}

const awayInfo = {
    "Court":{
        area: "Court",
        players: [],
    },
    "Bench":{
        area: "Bench",
        players: matchExample.awayTeamPlayers,
    }
}


function StatSheet(){
    const [homeColumn, setHomeColumns] = useState(homeInfo);
    const [awayColumn, setAwayColumns] = useState(awayInfo);
    let homeCourtInfo = homeColumn[Object.keys(homeColumn)[0]].players;
    let awayCourtInfo = awayColumn[Object.keys(awayColumn)[0]].players;

    console.log(homeColumn)
    const updateStats = (player, team, statCategory) => {
        console.log(player, team, statCategory)
        if (team === "home"){
            console.log(homeColumn)
        }
    }

    // Drag players from bench to court or vice versa
    const onDragEnd = (result, team) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (team === "home"){
        if (source.droppableId !== destination.droppableId) {
            const sourceColumn = homeColumn[source.droppableId];
            const destColumn = homeColumn[destination.droppableId];
            if(destColumn.area === "Court" && destColumn.players.length >= 5) return;
            const sourcePlayers = [...sourceColumn.players];
            const destPlayers = [...destColumn.players];
            const [removed] = sourcePlayers.splice(source.index, 1);
            destPlayers.splice(destination.index, 0, removed);
            setHomeColumns({
                ...homeColumn,
                [source.droppableId]: {
                  ...sourceColumn,
                  players: sourcePlayers
                },
                [destination.droppableId]: {
                  ...destColumn,
                  players: destPlayers
                }
            });
        }
        } else {
            if (source.droppableId !== destination.droppableId) {
                const sourceColumn = awayColumn[source.droppableId];
                const destColumn = awayColumn[destination.droppableId];
                if(destColumn.area === "Court" && destColumn.players.length >= 5) return;
                const sourcePlayers = [...sourceColumn.players];
                const destPlayers = [...destColumn.players];
                const [removed] = sourcePlayers.splice(source.index, 1);
                destPlayers.splice(destination.index, 0, removed);
                setAwayColumns({
                    ...awayColumn,
                    [source.droppableId]: {
                      ...sourceColumn,
                      players: sourcePlayers
                    },
                    [destination.droppableId]: {
                      ...destColumn,
                      players: destPlayers
                    }
                });
            } else {
                const column = awayColumn[source.droppableId];
                const copiedPlayers = [...column.players];
                const [removed] = copiedPlayers.splice(source.index, 1);
                copiedPlayers.splice(destination.index, 0, removed)
                setAwayColumns({
                    ...awayColumn,
                    [source.droppableId]: {
                      ...column,
                      players: copiedPlayers
                    }
                });
            }
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
                    <TeamStatsTable team="home" updateStats={updateStats} players={homeCourtInfo}/>
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
                    <TeamStatsTable team="away" updateStats={updateStats} players={awayCourtInfo}/>
                </Paper>
            </div>
        </div>
    )
}

export default StatSheet

//2pt 3pt FT Reb Ast Stl Blk TO Foul Pts
