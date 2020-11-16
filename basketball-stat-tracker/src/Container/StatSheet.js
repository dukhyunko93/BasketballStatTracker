import React, { useState } from "react";
import matchExample from "../component/TeamExample";
import "./StatSheet.css";
import HomeBench from "../component/HomeBench";
import AwayBench from "../component/AwayBench";
import { uuid } from "uuidv4"

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
  console.log(matchExample)
    const [homeColumn, setHomeColumns] = useState(homeInfo);
    const [awayColumn, setAwayColumns] = useState(awayInfo);

    const onDragEndHome = (result, column) => {

        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = homeColumn[source.droppableId];
          const destColumn = homeColumn[destination.droppableId];
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
        } else {
          const column = homeColumn[source.droppableId];
          const copiedPlayers = [...column.players];
          const [removed] = copiedPlayers.splice(source.index, 1);
          copiedPlayers.splice(destination.index, 0, removed)
          setHomeColumns({
            ...homeColumn,
            [source.droppableId]: {
              ...column,
              players: copiedPlayers
            }
          });
        }
      };

      const onDragEndAway = (result, column) => {

        if (!result.destination) return;
        const { source, destination } = result;
        if (source.droppableId !== destination.droppableId) {
          const sourceColumn = awayColumn[source.droppableId];
          const destColumn = awayColumn[destination.droppableId];
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
        <>
            <div className="stats" >
                <div className="homeTeamContainer">
                    <div className="homeTeamBench">
                      <h2>Home: {matchExample.homeTeam}</h2>
                      <div className="homePlayers">
                          <HomeBench onDragEnd={onDragEndHome} columns={homeColumn}/>
                      </div>
                    </div>
                </div>
                <div className="scoreBoard">
                    <h1>Home: 100 Away: 99</h1>
                </div>
                <div className="awayTeamContainer">
                    <div className="awayTeamBench">
                      <h2>Away: {matchExample.awayTeam}</h2>
                      <div className="awayPlayers">
                          <AwayBench onDragEnd={onDragEndAway} columns={awayColumn}/>
                      </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatSheet

//2pt 3pt FT Reb Ast Stl Blk TO Foul Pts
