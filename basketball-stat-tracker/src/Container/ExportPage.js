import React, {useState} from "react"
import FinalBoxScore from "../component/FinalBoxScore"
import styled from "styled-components";
import { connect } from 'react-redux'
import ExportExcel from '../component/ExportExcel' 
import { Button } from '@material-ui/core/';

const TeamContainer = styled.div`
    width: 100% !important;
    text-align: center;
    width: fit-content;
    padding: 10px;
    button{
        color: rgba(0, 0, 0, 0.87);
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-weight: 500;
        line-height: 3vh;
        letter-spacing: 0.02857em;
        margin-right: 2vh;
        margin-left: 2vh;
    }
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