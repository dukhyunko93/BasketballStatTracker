import React from "react"
import { Button } from "@material-ui/core"

export default function ScoreBox(props){
    const clickHandler = () => {
        props.submitBoxScore()
    }
    return(
        <div>
            <div style={{padding: "5px", display: "flex"}}>
                <h1 style={{margin: 0}}>SCORE BOX</h1>
                <Button onClick={clickHandler}> Submit </Button>
            </div>
        </div>
    )
}