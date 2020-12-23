import React, {useState, useEffect} from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function ExportExcel (props) {

    const [homeTeam, setHomeTeam] = useState([])
    const [awayTeam, setAwayTeam] = useState([])

    const makePlayerData = (players, callback) => {
        let team = [];
        for (let i = 0; i < players.length; i++){
            let player = {};
            player.firstName = players[i].firstName;
            player.lastName = players[i].lastName;
            player.jerseyNumber = players[i].jerseyNumber;
            player.position = players[i].position;
            player.ast = players[i].stats.AST;
            player.blk = players[i].stats.BLK;
            player.fga = players[i].stats.FGA;
            player.fgm = players[i].stats.FGM;
            player.fta = players[i].stats.FTA;
            player.ftm = players[i].stats.FTM;
            player.pf = players[i].stats.PF;
            player.pts = players[i].stats.PTS;
            player.reb = players[i].stats.REB;
            player.stl = players[i].stats.STL;
            player.to = players[i].stats.TO;
            player.tpa = players[i].stats.TPA;
            player.tpm = players[i].stats.TPM;
            team.push(player);
        }
        callback(team);
    }
    
    useEffect(() => {
        makePlayerData(props.homeStat.players, setHomeTeam);
        makePlayerData(props.awayStat.players, setAwayTeam);
    }, [props.homeStat.players, props.awayStat.players])

    return (
        <ExcelFile>
            <ExcelSheet data={homeTeam} name={props.homeStat.name}>
                <ExcelColumn label="First Name" value="firstName"/>
                <ExcelColumn label="Last Name" value="lastName"/>
                <ExcelColumn label="#" value="jerseyNumber"/>
                <ExcelColumn label="Position" value="position"/>
                <ExcelColumn label="FGA" value="fga"/>
                <ExcelColumn label="FGM" value="fgm"/>
                <ExcelColumn label="TPA" value="tpa"/>
                <ExcelColumn label="TPM" value="tpm"/>
                <ExcelColumn label="FTA" value="fta"/>
                <ExcelColumn label="FTM" value="ftm"/>
                <ExcelColumn label="REB" value="reb"/>
                <ExcelColumn label="AST" value="ast"/>
                <ExcelColumn label="STL" value="stl"/>
                <ExcelColumn label="BLK" value="blk"/>
                <ExcelColumn label="TO" value="to"/>
                <ExcelColumn label="PF" value="pf"/>
                <ExcelColumn label="PTS" value="pts"/>
            </ExcelSheet>
            <ExcelSheet data={awayTeam} name={props.awayStat.name}>
                <ExcelColumn label="First Name" value="firstName"/>
                <ExcelColumn label="Last Name" value="lastName"/>
                <ExcelColumn label="#" value="jerseyNumber"/>
                <ExcelColumn label="Position" value="position"/>
                <ExcelColumn label="FGA" value="fga"/>
                <ExcelColumn label="FGM" value="fgm"/>
                <ExcelColumn label="TPA" value="tpa"/>
                <ExcelColumn label="TPM" value="tpm"/>
                <ExcelColumn label="FTA" value="fta"/>
                <ExcelColumn label="FTM" value="ftm"/>
                <ExcelColumn label="REB" value="reb"/>
                <ExcelColumn label="AST" value="ast"/>
                <ExcelColumn label="STL" value="stl"/>
                <ExcelColumn label="BLK" value="blk"/>
                <ExcelColumn label="TO" value="to"/>
                <ExcelColumn label="PF" value="pf"/>
                <ExcelColumn label="PTS" value="pts"/>
            </ExcelSheet>
        </ExcelFile>
    );
}

export default ExportExcel