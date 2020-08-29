import React from 'react'
import Sidebar from './Sidebar'
import Body from "./Body"
import Footer from "./footer"
import "./player.css"
import "./body.css"


export default function Player({spotify}) {
    return (
        <div className="player">
            <div className="player_body">
                <Sidebar />
                <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify}/>
        </div>
    )
}
