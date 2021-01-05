import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./StatSheet.css";
import { Paper, Button } from "@material-ui/core";
import Bench from "../component/Bench";
import ScoreBox from "../component/ScoreBox"
import TeamStatsTable from "../component/TeamStatsTable"
import ConfirmModal from "../component/StatConfirmModal"

function StatSheet(props){
    // opens and closes modal
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    };
    
      const handleClose = () => {
        setOpen(false);
    };
    
    const match = JSON.parse(localStorage.getItem("match"))

    const homeInfo = match ? 
        match.homeInfo :
        {
            "Court":[],
            "Bench": props.match.homeTeamPlayers,
        }
    
    const awayInfo = match ? 
        match.awayInfo :
        {
            "Court":[],
            "Bench": props.match.awayTeamPlayers,
        }

    const score = match ? 
        match.score :
        {
            homeTeamScore: props.match.homeTeamScore,
            awayTeamScore: props.match.awayTeamScore
        }
    
    const [homeColumn, setHomeColumns] = useState(homeInfo);
    const [awayColumn, setAwayColumns] = useState(awayInfo);
    const [scoreBoard, setScoreBoard] = useState(score);

    const updateStats = (team, scoreDifference) => {
        if (team === "home"){
            setHomeColumns({...homeColumn})
            if(scoreDifference){
                let totalScore = scoreBoard.homeTeamScore + scoreDifference
                setScoreBoard({
                    ...scoreBoard,
                    homeTeamScore: totalScore
                })
            }
        } else {
            setAwayColumns({...awayColumn})
            if(scoreDifference){
                let totalScore = scoreBoard.awayTeamScore + scoreDifference
                setScoreBoard({
                    ...scoreBoard,
                    awayTeamScore: totalScore
                })
            }
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

    const submitHandler = () => {

    }

    useEffect(() => {
        let match = {
            score: scoreBoard,
            homeInfo: homeColumn,
            awayInfo: awayColumn,
        }
        localStorage.setItem("match", JSON.stringify(match));

        return function() {
            localStorage.setItem("match", null);
        }
    });
    
    return(
        <form onSubmit={submitHandler} className="container" >
            <ConfirmModal handleClose={handleClose} open={open} />
            <ScoreBox homeTeamScore={scoreBoard.homeTeamScore} awayTeamScore={scoreBoard.awayTeamScore} />
            {/* <Button component={ Link } to="/exportpage" > */}
            <Button onClick={handleOpen} >
                Submit
            </Button>
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
        </form>
    )
}

const mapStateToProps = (state) => ({
    match: state.matchReducer
  })
  
export default connect(mapStateToProps, null)(StatSheet);