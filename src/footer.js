import React, {useEffect} from 'react'
import {useStateValue} from './StateProvider'
import "./footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleFilledOutlined"
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleFilledOutlined"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import PlayListIcon from "@material-ui/icons/PlaylistAddCheckOutlined"
import {Grid,Slider} from '@material-ui/core'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'

function Footer({spotify}) {
    const [{ token, item, playing }, dispatch] = useStateValue();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {

        dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
        });

        dispatch({
            type: "SET_ITEM",
            item: r.item,
        });
        });
  }, [spotify]);

    const handlePlayPause = ()=>{
        if(playing){
            spotify.pause();
            dispatch({
                type:'SET_PLAYING',
                playing:false
            })
        }
        else{
            spotify.play()
            dispatch({
                type:"SET_PLAYING",
                playing:true
            })
        }
        }

    const skipNext = () => {
        spotify.skipToNext();
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
      };
    
      const skipPrevious = () => {
        spotify.skipToPrevious();
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
      };

      
    return (
        <div className="footer">
            <div className="footer_left">
                    <img className="footer_albumLogo" src={item?.album?.images[0]?.url} alt={item?.name}/>
                    {item ? (
          <div className="footer_info">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer_info">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_green" />
                <SkipPreviousIcon className="footer_icon"  onClick={skipNext}  />
                {playing ? (
                    <PauseCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                    ) : (
                    <PlayCircleOutlineIcon
                        onClick={handlePlayPause}
                        fontSize="large"
                        className="footer__icon"
                    />
                )}
                <SkipNextIcon className="footer_icon" onClick={skipPrevious}/>
                <RepeatIcon className="footer_green" />
            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlayListIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
