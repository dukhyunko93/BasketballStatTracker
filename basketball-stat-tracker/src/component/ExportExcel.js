import React, {useState, useEffect} from "react";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

function ExportExcel (props) {
    const [homeTeamStat, setHomeTeamStat] = useState([]);
    const [awayTeamStat, setAwayTeamStat] = useState([]);
    const [totalStat, setTotalStat] = useState([]);

    useEffect(() => {
        const makePlayerData = (players, setTeamStat) => {
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
            setTeamStat(team);
        }
        
        const makeTotalData = (homePlayers, awayPlayers, setTotalStat) => {
            let homeStat = {}, awayStat = {};
            homeStat.name = props.homeStat.name;
            awayStat.name = props.awayStat.name;
            for (let i = 0; i < homePlayers.length; i++){
                homeStat.ast = (homeStat.ast + homePlayers[i].stats.AST) || homePlayers[i].stats.AST;
                homeStat.blk = (homeStat.blk + homePlayers[i].stats.BLK) || homePlayers[i].stats.BLK;
                homeStat.fga = (homeStat.fga + homePlayers[i].stats.FGA) || homePlayers[i].stats.FGA;
                homeStat.fgm = (homeStat.fgm + homePlayers[i].stats.FGM) || homePlayers[i].stats.FGM;
                homeStat.fta = (homeStat.fta + homePlayers[i].stats.FTA) || homePlayers[i].stats.FTA;
                homeStat.ftm = (homeStat.ftm + homePlayers[i].stats.FTM) || homePlayers[i].stats.FTM;
                homeStat.pf = (homeStat.pf + homePlayers[i].stats.PF) || homePlayers[i].stats.PF;
                homeStat.pts = (homeStat.pts + homePlayers[i].stats.PTS) || homePlayers[i].stats.PTS;
                homeStat.reb = (homeStat.reb + homePlayers[i].stats.REB) || homePlayers[i].stats.REB;
                homeStat.stl = (homeStat.stl + homePlayers[i].stats.STL) || homePlayers[i].stats.STL;
                homeStat.to = (homeStat.to + homePlayers[i].stats.TO) || homePlayers[i].stats.TO;
                homeStat.tpa = (homeStat.tpa + homePlayers[i].stats.TPA) || homePlayers[i].stats.TPA;
                homeStat.tpm = (homeStat.tpm + homePlayers[i].stats.TPM) || homePlayers[i].stats.TPM;
            }

            for (let i = 0; i < awayPlayers.length; i++){
                awayStat.ast = (awayStat.ast + awayPlayers[i].stats.AST) || awayPlayers[i].stats.AST;
                awayStat.blk = (awayStat.blk + awayPlayers[i].stats.BLK) || awayPlayers[i].stats.BLK;
                awayStat.fga = (awayStat.fga + awayPlayers[i].stats.FGA) || awayPlayers[i].stats.FGA;
                awayStat.fgm = (awayStat.fgm + awayPlayers[i].stats.FGM) || awayPlayers[i].stats.FGM;
                awayStat.fta = (awayStat.fta + awayPlayers[i].stats.FTA) || awayPlayers[i].stats.FTA;
                awayStat.ftm = (awayStat.ftm + awayPlayers[i].stats.FTM) || awayPlayers[i].stats.FTM;
                awayStat.pf = (awayStat.pf + awayPlayers[i].stats.PF) || awayPlayers[i].stats.PF;
                awayStat.pts = (awayStat.pts + awayPlayers[i].stats.PTS) || awayPlayers[i].stats.PTS;
                awayStat.reb = (awayStat.reb + awayPlayers[i].stats.REB) || awayPlayers[i].stats.REB;
                awayStat.stl = (awayStat.stl + awayPlayers[i].stats.STL) || awayPlayers[i].stats.STL;
                awayStat.to = (awayStat.to + awayPlayers[i].stats.TO) || awayPlayers[i].stats.TO;
                awayStat.tpa = (awayStat.tpa + awayPlayers[i].stats.TPA) || awayPlayers[i].stats.TPA;
                awayStat.tpm = (awayStat.tpm + awayPlayers[i].stats.TPM) || awayPlayers[i].stats.TPM;
            }
            setTotalStat([homeStat, awayStat])
        }

        makePlayerData(props.homeStat.players, setHomeTeamStat);
        makePlayerData(props.awayStat.players, setAwayTeamStat);
        makeTotalData(props.homeStat.players, props.awayStat.players, setTotalStat);

    }, [props.homeStat.players, props.awayStat.players, props.homeStat.name, props.awayStat.name]);

    return (
        <ExcelFile>
            <ExcelSheet data={totalStat} name="Total Stats">
                <ExcelColumn label="Team Name" value="name"/>
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
            <ExcelSheet data={homeTeamStat} name={props.homeStat.name}>
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
            <ExcelSheet data={awayTeamStat} name={props.awayStat.name}>
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