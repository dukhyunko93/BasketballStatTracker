import React from 'react';
import styled from "styled-components";
import { Box, FormControl, InputLabel, Input, MenuItem, Select, Button} from '@material-ui/core';
import HighlightOff from '@material-ui/icons/HighlightOff';

const BoxContainer = styled(Box)`
    display:flex;
    margin-top: 5px;
`
const TextFieldControl = styled(FormControl)`
    width: 20ch;
    margin: 8px;
    margin-top: 0;
`

const DropdownControl = styled(FormControl)`
    margin-top: 0;
    width: 120px;
`

const DeleteButton = styled(Button)`
    min-width: 10px !important;
`
export default function NewPlayer (props){
    
    const onChange = (e) => {
        props.updatePlayerInfo(props.id, e.target, props.team)
    }

    return (
        <>
            <BoxContainer>
                <TextFieldControl>
                    <InputLabel>First Name</InputLabel>
                    <Input name="firstName" value={props.firstName} onChange={onChange} />
                </TextFieldControl>                                
                <TextFieldControl>
                    <InputLabel>Last Name</InputLabel>
                    <Input name="lastName" value={props.lastName} onChange={onChange} />
                </TextFieldControl>
                <TextFieldControl>
                    <InputLabel>Jersey #</InputLabel>
                    <Input name="jerseyNumber" value={props.jerseyNumber} onChange={onChange} />
                </TextFieldControl>
                <DropdownControl >
                    <InputLabel>Position</InputLabel>
                    <Select name="position" value={props.position} onChange={onChange}>
                        <MenuItem value={"PG"}>PG</MenuItem>
                        <MenuItem value={"SG"}>SG</MenuItem>
                        <MenuItem value={"SF"}>SF</MenuItem>
                        <MenuItem value={"PF"}>PF</MenuItem>
                        <MenuItem value={"C"}>C</MenuItem>
                    </Select>
                </DropdownControl>
                <DeleteButton onClick={() => props.deletePlayer(props.id, props.team)}>
                    <HighlightOff style={{color:"#ff6961"}} />
                </DeleteButton>
            </BoxContainer>
        </>
    )
}