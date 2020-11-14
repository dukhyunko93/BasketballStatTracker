import React from 'react';
import matchExample from '../component/TeamExample'
import './StatSheet.css';

function StatSheet(props){
    console.log(matchExample)
    return(
        <div className="statsheet">
            <div className="court">
                <div>
                    <h4>Home</h4>
                </div>
                <div>
                    <h4>Away</h4>
                </div>
            </div>
            <div className="bench">
                <div>
                    <h4>Home</h4>
                </div>
                <div>
                    <h4>Away</h4>
                </div>
            </div>
        </div>
    )
}

export default StatSheet

//2pt 3pt FT Reb Ast Stl Blk TO Foul Pts
