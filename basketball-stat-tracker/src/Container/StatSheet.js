import React, { useState } from "react";
import "./StatSheet.css";
import Bench from "../component/Bench";
import TeamStatsTable from "../component/TeamStatsTable"
import { uuid } from "uuidv4"
import { Paper } from "@material-ui/core";
import matchExample from "../component/TeamExample";

const homeInfo = {
    [uuid()]:{
        area: "Court",
        players: [],
    },
    [uuid()]:{
        area: "Bench",
        players: matchExample.homeTeamPlayers,
    }
}

const awayInfo = {
    [uuid()]:{
        area: "Court",
        players: [],
    },
    [uuid()]:{
        area: "Bench",
        players: matchExample.awayTeamPlayers,
    }
}


function StatSheet(props){
    const [homeColumn, setHomeColumns] = useState(homeInfo);
    const [awayColumn, setAwayColumns] = useState(awayInfo);
    let homeCourtInfo = homeColumn[Object.keys(homeColumn)[0]].players;
    let awayCourtInfo = awayColumn[Object.keys(awayColumn)[0]].players;

    // Drag players from bench to court or vice versa
    const onDragEndHome = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = homeColumn[source.droppableId];
          const destColumn = homeColumn[destination.droppableId];
          if(destColumn.area === "Court" && destColumn.players.length >= 5){
            return;
          }
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
      };

      const onDragEndAway = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = awayColumn[source.droppableId];
          const destColumn = awayColumn[destination.droppableId];
          if(destColumn.area === "Court" && destColumn.players.length >= 5){
            return;
          }
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
      };
      

    return(
      <div className="container" >
          <div className="homeTeamContainer" >
            <Paper style={{minWidth: "900px",padding: "1px"}}>
              <div className="homeTeamBench">
                <h5>Home: {matchExample.homeTeam}</h5>
                <div className="homePlayers">
                    <Bench home onDragEnd={onDragEndHome} columns={homeColumn}/>
                </div>
              </div>
              <TeamStatsTable players={homeCourtInfo}/>
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
                    <Bench away onDragEnd={onDragEndAway} columns={awayColumn}/>
                </div>
              </div>
              <TeamStatsTable players={awayCourtInfo}/>
            </Paper>
          </div>
      </div>
    )
}

export default StatSheet

//2pt 3pt FT Reb Ast Stl Blk TO Foul Pts
