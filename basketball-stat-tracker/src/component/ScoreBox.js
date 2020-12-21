import React from "react"
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core"

export default function ScoreBox(props){
    
    return(
        <div>
            <div style={{padding: "5px", display: "flex"}}>
                <h1 style={{margin: 0}}>HOME {props.homeTeamScore} : {props.awayTeamScore} AWAY</h1>
                <Button component={ Link } to="/exportpage" >
                    Submit
                </Button>
            </div>
        </div>
    )
}