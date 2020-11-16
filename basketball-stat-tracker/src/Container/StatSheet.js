import React, { useState } from "react";
import matchExample from "../component/TeamExample";
import "./StatSheet.css";
// import Court from "../component/Court";
import HomeBench from "../component/HomeBench";
// import AwayBench from "../component/AwayBench";
import { uuid } from "uuidv4"


const homePlayersArray = () => {
    return matchExample.homeTeamPlayers;
};

// const awayPlayersArray = () => {
//     return matchExample.awayTeamPlayers;
// };

const homeInfo = {
    homeBench: {
        id: uuid(),
        name: "Home Bench",
        players: homePlayersArray(),
    },
    homeCourt: {
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

    const onDragEndHome = (result, columns) => {

        if (!result.destination) return;
        const { source, destination } = result;
        console.log(columns)
        console.log(destination)
        // if (source.droppableId !== destination.droppableId) {
        //   const sourceColumn = columns[source.droppableId];
        //   const destColumn = columns[destination.droppableId];
        //   const sourceItems = [...sourceColumn.items];
        //   const destItems = [...destColumn.items];
        //   const [removed] = sourceItems.splice(source.index, 1);
        //   destItems.splice(destination.index, 0, removed);
        //   setColumns({
        //     ...columns,
        //     [source.droppableId]: {
        //       ...sourceColumn,
        //       items: sourceItems
        //     },
        //     [destination.droppableId]: {
        //       ...destColumn,
        //       items: destItems
        //     }
        //   });
        // } else {
        //   const column = homeColumn[source.droppableId];
        //   const copiedItems = [...column.players];
        //   const [removed] = copiedItems.splice(source.index, 1);
        //   copiedItems.splice(destination.index, 0, removed)
        //   setHomeColumns({
        //     ...columns,
        //     [source.droppableId]: {
        //       ...column,
        //       items: copiedItems
        //     }
        //   });
        // }
      };
      

    return(
        <div className="bench" >
            <HomeBench onDragEnd={onDragEndHome} column={homeColumn.homeBench}/>
            {/* <AwayBench onDragEnd={onDragEnd} column={columns.awayBench}/> */}
        </div>
    )
}

export default StatSheet

//2pt 3pt FT Reb Ast Stl Blk TO Foul Pts
