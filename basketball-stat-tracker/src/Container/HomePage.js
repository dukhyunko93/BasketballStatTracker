import React from 'react';
import { showNavBar } from "../action/NavBar";

export default function HomePage(){
    showNavBar()
    return(
        <div>
            Hello!
        </div>
    )
}