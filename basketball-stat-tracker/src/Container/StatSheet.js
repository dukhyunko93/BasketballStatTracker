import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { hideNavBar } from "../action/navBarAction"
import { saveBoxScore } from "../action/boxScoreAction"
import { updatePlayerStat } from "../action/matchAction"
import "./StatSheet.css";
import { Paper } from "@material-ui/core";
import Bench from "../component/Bench";
import ScoreBox from "../component/ScoreBox"
import TeamStatsTable from "../component/TeamStatsTable"

function StatSheet(props){
    const homeInfo = {
        "Court":[],
        "Bench": props.match.homeTeamPlayers,
    }
    
    const awayInfo = {
        "Court":[],
        "Bench": props.match.awayTeamPlayers,
    }
    
    const [homeColumn, setHomeColumns] = useState(homeInfo);
    const [awayColumn, setAwayColumns] = useState(awayInfo);

    const updateStats = (updatedPlayer, team) => {
        props.updatePlayerStat(updatedPlayer, team)
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

    const submitBoxScore = () => {
        props.saveBoxScore(props.match)
    }

    props.hideNavBar();
    return(
        <div className="container" >
            <ScoreBox submitBoxScore={submitBoxScore} />
            <div className="stat-container">
                <div className="team-container">
                    <h5 className="team-name">{props.match.homeTeamName}</h5>
                    <div className="team-bench">
                        <Bench team="home" onDragEnd={onDragEnd} columns={homeColumn}/>
                    </div>
                </div>
                <Paper style={{minWidth: "900px",padding: "1px"}}>
                    <TeamStatsTable team="home" updateStats={updateStats} players={homeColumn["Court"]}/>
                </Paper>
            </div>
            <div className="stat-container">
                <div className="team-container">
                    <h5 className="team-name">{props.match.awayTeamName}</h5>
                    <div className="team-bench">
                        <Bench team="away" onDragEnd={onDragEnd} columns={awayColumn}/>
                    </div>
                </div>    
                <Paper style={{minWidth: "900px",padding: "1px"}}>
                    <TeamStatsTable team="away" updateStats={updateStats} players={awayColumn["Court"]}/>
                </Paper>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    const combinedActions = {
        hideNavBar,
        saveBoxScore,
        updatePlayerStat
    }
    return bindActionCreators(combinedActions, dispatch);
}

const mapStateToProps = (state) => ({
    match: state.matchReducer
  })
  
export default connect(mapStateToProps, mapDispatchToProps)(StatSheet);