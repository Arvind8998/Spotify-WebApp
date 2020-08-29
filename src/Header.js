import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import {Avatar} from '@material-ui/core'
import {useStateValue} from './StateProvider'

function Header({spotify}) {
    const [{user}, dispatch] = useStateValue()
    return (
        <div className="header">
            <div className="header_left">
                <SearchIcon />
                <input placeholder="Search for Artists,songs or podcasts" />
            </div>
            <div className="header_right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header
