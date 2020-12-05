import React from "react"
import { Button } from "@material-ui/core"

export default function ScoreBox(props){
    const clickHandler = () => {
        props.submitBoxScore()
    }

    console.log("[[score box]]", props.homeTeamScore, props.awayTeamScore)
    return(
        <div>
            <div style={{padding: "5px", display: "flex"}}>
                <h1 style={{margin: 0}}>HOME {props.homeTeamScore} : {props.awayTeamScore} AWAY</h1>
                <Button onClick={clickHandler}> Submit </Button>
            </div>
        </div>
    )
}