import React from "react";
import matchExample from "../component/TeamExample";
import "./StatSheet.css";
import Court from "../component/Court";
import HomeBench from "../component/HomeBench";
import AwayBench from "../component/AwayBench";
import { uuid } from "uuidv4"


const homePlayersArray = () => {
    return matchExample.homeTeamPlayers;
};

const awayPlayersArray = () => {
    return matchExample.awayTeamPlayers;
};

const homeBench = {
    [uuid()]: {
        name: "Home Bench",
        items: homePlayersArray(),
    }
};

const awayBench = {
    [uuid()]:{
        name: "Away Bench",
        items: awayPlayersArray(),
    }
}


function StatSheet(props){
    console.log(props)

    const onDragEnd = (result, column, setColumn) => {
        if (!result.destination) return;
        const { source, destination } = result;
        const newColumn = column[source.droppableId];
        const copiedItems = [...newColumn.items];
        const[removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0 , removed);
        setColumn({
            ...column,
            [source.droppableId]:{
                ...newColumn,
                items:copiedItems
            }
        })
    };

    return(
        <div className="bench" >
            <HomeBench onDragEnd={onDragEnd} benchColumn={homeBench}/>
            <AwayBench onDragEnd={onDragEnd} benchColumn={awayBench}/>
        </div>
    )
}

export default StatSheet

//2pt 3pt FT Reb Ast Stl Blk TO Foul Pts
