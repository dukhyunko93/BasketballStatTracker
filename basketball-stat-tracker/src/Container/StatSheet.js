import React, { useState } from 'react';
import { connect } from "react-redux";

function StatSheet(props){
    console.log(props)
    return(
        <div>
            Hello!
        </div>
    )
}

const mapStateToProps = state => {
    return state
  }

export default connect(mapStateToProps)(StatSheet)