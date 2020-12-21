import React, {useState} from "react"
import FinalBoxScore from "../component/FinalBoxScore"
import styled from "styled-components";
import { connect } from 'react-redux'

const TeamContainer = styled.div`
    width: 100% !important;
    text-align: center;
    width: fit-content;
    padding: 10px;
`

function ExportPage(props){

    const homeStat = {
        name: props.match.homeTeamName,
        players: props.match.homeTeamPlayers,
        score: props.match.homeTeamScore
    }
    
    const awayStat = {
        name: props.match.awayTeamName,
        players: props.match.awayTeamPlayers,
        score: props.match.awayTeamScore
    }

    const [team, setTeam] = useState("Away");
    const [teamStat, setTeamStat] = useState(homeStat);

    const statDisplayHandler = () => {
        team === "Away" ? setTeam("Home") : setTeam("Away")
        team === "Away" ? setTeamStat(awayStat) : setTeamStat(homeStat)
    }

    return(
        <>  
            <TeamContainer>
                <h1>{teamStat.name}</h1><button onClick={statDisplayHandler} >View {team} Team</button>
                <FinalBoxScore players={teamStat.players} />
            </TeamContainer>
        </>
    )
}
const mapStateToProps = (state) => ({
    match: state.matchReducer
})

export default connect(mapStateToProps)(ExportPage);