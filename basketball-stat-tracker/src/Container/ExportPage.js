import React from "react"
import FinalBoxScore from "../component/FinalBoxScore"
import styled from "styled-components";
import { connect } from 'react-redux'

const TeamContainer = styled.div`
    width: fit-content;
    padding: 10px;
`
function ExportPage(props){
    const matchInfo = props.match
    return(
        <>  
            <TeamContainer>
                <h1>{matchInfo.homeTeamName}</h1>
                <FinalBoxScore players={matchInfo.homeTeamPlayers} />
            </TeamContainer>
        </>
    )
}
const mapStateToProps = (state) => ({
    match: state.matchReducer
})

export default connect(mapStateToProps)(ExportPage);