import React from "react"
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core"

const ScoreBoard = styled.div`
    padding: "5px";
    display: "flex";
`

export default function ScoreBox({homeTeamScore, awayTeamScore}){
    
    return(
        <div>
            <ScoreBoard>
                <h1 style={{margin: 0}}>HOME {homeTeamScore} : {awayTeamScore} AWAY</h1>
                <Button component={ Link } to="/exportpage" >
                    Submit
                </Button>
            </ScoreBoard>
        </div>
    )
}