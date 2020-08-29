import React from 'react'
import Header from './Header'
import {useStateValue}from './StateProvider'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled"
import FavouriteIcon from '@material-ui/icons/Favorite'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SongRow from './SongRow'
import './header.css'
import "./body.css"


function Body({spotify}) {
    const [{discover_weekly},dispatch] = useStateValue()

    const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:6V0Anm5bFvRYQJNaKOHvue`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

    const playSong =(id)=>{
        spotify.play({
            uris:[`spotify:track${id}`],
        })
        .then(res=>{
            spotify.getMyCurrentPlayingTrack().then(r=>{
                dispatch({
                    type:'SET_ITEM',
                    item:r.item
                });
                dispatch({
                    type:'SET_PLAYING',
                    playing:true
                })
            })
        })
    }

    return (
        <div className="body">
            <Header spotify={spotify}/>
            <div className="body_info">
                <img className="weekly_image" src={discover_weekly?.images[0]?.url}alt=""/>
                <div className="body_infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
                <div className="body_songs">
                    <div className="body_icons">
                        <PlayCircleFilledIcon onClick={playPlaylist} className="body_shuffle" />
                        <FavouriteIcon fontSize="large" />
                        <MoreHorizIcon />
                    </div>
                    {
                        discover_weekly?.tracks?.items?.map(item=>
                            <SongRow  track={item.track} playSong={playSong} />)
                    }
                </div>
            </div>
    )
}

export default Body
