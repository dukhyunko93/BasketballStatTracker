import React, { useState } from "react";
import matchExample from "../component/TeamExample";
import "./StatSheet.css";
// import Court from "../component/Court";
import HomeBench from "../component/HomeBench";
import HomeCourt from "../component/HomeCourt";
// import AwayBench from "../component/AwayBench";
import { uuid } from "uuidv4"


const homePlayersArray = () => {
    return matchExample.homeTeamPlayers;
};

// const awayPlayersArray = () => {
//     return matchExample.awayTeamPlayers;
// };

const homeInfo = {
    [uuid()]:{
        name: "Home Bench",
        players: homePlayersArray(),
    },
    [uuid()]:{
        name: "Home Court",
        players: [],
    }
}

// const awayInfo = {
//     [uuid()]:{
//         name: "Away Bench",
//         players: awayPlayersArray(),
//     },
//     [uuid()]:{
//         name: "Away Court",
//         players: [],
//     }
// }


function StatSheet(props){
    const [homeColumn, setHomeColumns] = useState(homeInfo);
    // const [awayColumn, setAwayColumns] = useState(awayInfo);

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
      

    return(
        <>
            <div className="bench" >
                <HomeBench onDragEnd={onDragEndHome} columns={homeColumn}/>
                {/* <AwayBench onDragEnd={onDragEnd} column={columns.awayBench}/> */}
            </div>
        </>
    )
}

export default StatSheet

//2pt 3pt FT Reb Ast Stl Blk TO Foul Pts
