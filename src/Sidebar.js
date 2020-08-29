import React from 'react'
import "./sidebar.css"
import SidebarOption from "./SidebarOption"
import HomeICON  from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic"
import {useStateValue} from "./StateProvider";
function Sidebar() {
    const [{playlists},dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <img className="sidebar_logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt ="Spotify Sidebar" />
            <SidebarOption Icon = {HomeICON} title="Home" />
            <SidebarOption Icon = {SearchIcon} title="Search" />
            <SidebarOption Icon ={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar_title">PLAYLISTS</strong>
            <hr />
            {playlists ?.items ?.map(item=><SidebarOption title={item.name} />)}
            
        </div>
    )
}

export default Sidebar
