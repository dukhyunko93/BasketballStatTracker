import React, {useState} from "react"
import FinalBoxScore from "../component/FinalBoxScore"
import styled from "styled-components";
import { connect } from 'react-redux'
import ExportExcel from '../component/ExportExcel' 

const TeamContainer = styled.div`
    width: 100% !important;
    text-align: center;
    width: fit-content;
    padding: 10px;
`

function ExportPage({ match }){

    const homeStat = {
        name: match.homeTeamName,
        players: match.homeTeamPlayers,
        score: match.homeTeamScore
    }
    
    const awayStat = {
        name: match.awayTeamName,
        players: match.awayTeamPlayers,
        score: match.awayTeamScore
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
                <ExportExcel homeStat={homeStat} awayStat={awayStat}/>
                <FinalBoxScore players={teamStat.players} />
            </TeamContainer>
        </>
    )
}
const mapStateToProps = (state) => ({
    match: state.matchReducer
})

export default connect(mapStateToProps)(ExportPage);