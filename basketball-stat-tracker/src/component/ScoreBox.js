import React from "react"
import styled from "styled-components";

const ScoreBoard = styled.div`
    padding: "5px";
    display: "flex";
`

export default function ScoreBox({homeTeamScore, awayTeamScore}){
    return(
        <div>
            <ScoreBoard>
                <h1 style={{margin: 0}}>HOME {homeTeamScore} : {awayTeamScore} AWAY</h1>
            </ScoreBoard>
        </div>
    )
}